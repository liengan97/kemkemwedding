"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import MasonryWishGrid from "@/components/MasonryWishGrid/MasonryWishGrid";
import TextCenter from "@/components/Center/TextCenter";
import Title from "@/components/Title/Title";
import Section from "@/components/Section/Section";
import LayoutCenter from "@/components/Center/LayoutCenter";
import SendWishesForm from "@/components/SendWishesForm/SendWishesForm";
import Parallax from "@/components/Parallax/Parallax";
import Overlay from "@/components/Overlay/Overlay";

import noti from "@/utils/notification.util";
import { fzPhotograph } from "@/utils/font.util";
import { PWishesBg } from "@/config/photo.config";
import useEventPassed from "@/hooks/useEventPassed";

function WishContainer() {
  const isEventPassed = useEventPassed();
  const [wishes, setWishes] = useState([]);
  const [sender, setSender] = useState("");
  const [wishMsg, setWishMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const response = await axios.get("/api/wishes");
        setWishes(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWishes();
  }, []);

  const sendWish = (e) => {
    e.preventDefault();

    if (sender.trim() && wishMsg.trim()) {
      setLoading(true);
      axios
        .post("/api/wishes", {
          sender: sender,
          message: wishMsg,
        })
        .then((_) => {
          noti.thankYou(sender);
          setSender("");
          setWishMsg("");
          setWishes(_.data);
        })
        .catch((error) => {
          if (error.status == 429) {
            noti.hmm();
          } else {
            noti.error();
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <>
      {
        <Section className="pb-12 px-4">
          <h2
            className="pb-8 pt-30 text-xl lg:text-3xl text-center text-[#126DA6] font-bold font-serif"
          >
            Ghé lại vài lời chúc yêu thương đến dâu rể bạn nhé! ☺️☺️☺️
          </h2>
          <LayoutCenter>
            <SendWishesForm
              senderName={sender}
              wishMessage={wishMsg}
              onSubmit={sendWish}
              isLoadingButton={loading}
              onSenderChanged={setSender}
              onWishMessageChanged={setWishMsg}
            />
          </LayoutCenter>
        </Section>
      }

      {wishes.length > 0 && (
        <Section className="relative">
          <Parallax bgUrl={PWishesBg.src}>
            <Overlay type="warm" />
            <div className="md:w-3/5 mx-auto h-screen relative">
              <TextCenter className="h-[80px]">
                <div
                  className={`py-5 text-white text-3xl font-light ${fzPhotograph.className}`}
                  style={{ textShadow: "2px 2px 4px #36608a" }}
                >
                  ✨ Lời chúc phúc ✨
                </div>
              </TextCenter>
              <div className="absolute top-[80px] bottom-20 left-0 right-0 overflow-y-scroll" style={{ textShadow: "1px 1px 1px #36608a" }}>
                <MasonryWishGrid wishes={wishes} />
              </div>
            </div>
          </Parallax>
        </Section>
      )}
    </>
  );
}

export default WishContainer;
