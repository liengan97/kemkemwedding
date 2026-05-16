import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { courgette } from "@/utils/font.util";
import useMobile from "@/hooks/useMobile";

const GalleryGrid = ({ images }) => {
  const [showAll, setShowAll] = useState(false);
  const isMobile = useMobile();
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const swiperInstanceRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const visibleImages = showAll ? images : images.slice(0, 4);

  // Helper để lấy src đúng kiểu
  const getImageSrc = (image) => {
    if (!image) return null;
    if (typeof image === "string") return image;
    if (typeof image.src === "string") return image.src;
    return image.src?.src || null;
  };

  // IntersectionObserver để kiểm tra khi gallery vào viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Khởi tạo Swiper cho mobile
  useEffect(() => {
    const initializeSwiper = () => {
      if (!swiperRef.current) return;

      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
      }

      const enableLoop = images.length >= 2;

      const swiper = new Swiper(swiperRef.current, {
        modules: [Autoplay, Navigation],
        direction: "horizontal",
        loop: enableLoop,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 10,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      });

      swiperInstanceRef.current = swiper;
    };

    if (isMobile && isInView && images.length > 0) {
      initializeSwiper();
    }

    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
        swiperInstanceRef.current = null;
      }
    };
  }, [isMobile, isInView, images]);

  return (
    <div className="w-full">
       {/* Tiêu đề Album */}
    <div className=" text-center my-0">
      <h2 className="text-xl lg:text-3xl pb-5 text-[#126DA6] font-bold font-serif">
        ALBUM ẢNH
      </h2>
    </div>

      {/* Desktop grid */}
      <div className="hidden md:block columns-4 gap-4 w-full relative">
        {!showAll && (
          <div className="absolute z-10 top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
        )}
        {visibleImages.map((image, index) => {
          const src = getImageSrc(image);
          if (!src) return null;
          return (
            <div key={index} className="relative mb-4 break-inside-avoid">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={1080}
                height={image.height || 200}
                quality={90}
                style={{ objectFit: "contain" }}
                className="w-full h-[70vh] rounded-lg"
              />
            </div>
          );
        })}
      </div>

      {!showAll && (
        <div className="pt-0 hidden md:block text-center">
          <button
            className={`font-light cursor-pointer text-md italic text-[#126DA6]`}
            onClick={() => setShowAll(true)}
          >
            - Tất cả ảnh -
          </button>
        </div>
      )}

      {/* Mobile swiper */}
      <div className="block md:hidden relative h-[70vh]" ref={sectionRef}>
        <div
          className="swiper-container h-[70vh] w-full overflow-hidden flex justify-center items-center"
          ref={swiperRef}
        >
          <div className="swiper-wrapper h-[70vh]">
            {images.map((image, index) => {
              const src = getImageSrc(image);
              if (!src) return null;
              return (
                <div
                  key={index}
                  className="swiper-slide flex justify-center items-center h-[70vh]"
                >
                  <div className="relative w-full h-[70vh] flex items-center">
                    {image.useOptimized ? (
                      <Image
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        width={1080}
                        height={image.height || 200}
                        quality={90}
                        style={{ objectFit: "contain" }}
                        className="w-full h-[70vh] rounded-lg "
                      />
                    ) : (
                      <img
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        width={1080}
                        height={image.height || 200}
                        style={{ objectFit: "contain" }}
                        className="w-full h-[70vh] rounded-lg"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="swiper-button-prev font-bold bg-black rounded-xs opacity-50 w-[24px] h-[24px] bg-[size:24px_24px] after:text-[12px] after:transform after:scale-[0.6]"></div>
        <div className="swiper-button-next font-bold bg-black rounded-xs opacity-50 w-[24px] h-[24px] bg-[size:24px_24px] after:text-[12px] after:transform after:scale-[0.6]"></div>
        <style>
          {`
            .swiper-button-prev,
            .swiper-button-next {
              background-size: 24px 24px;
              width: 26px;
              height: 30px;
            }

            .swiper-button-prev::after,
            .swiper-button-next::after {
              color: white;
              font-size: 18px;
              font-weight: bold;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default GalleryGrid;
