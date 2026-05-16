import "./style.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faClock,
  faChampagneGlasses,
} from "@fortawesome/free-solid-svg-icons";
import { quicksand } from "@/utils/font.util";
import useEventPassed from "@/hooks/useEventPassed";

function EventCard({
  title,
  location,
  time,
  dayText,
  year,
  dayMonth,
  alternativeDay,
  phoneNumber,
  googleMapLocation,
  photoUrl,
  time2,
  restaurant,
  restaurantName,
  restaurantHall,
}) {
  const isEventPassed = useEventPassed();
  return (
    <div className="mx-3 py-5 text-[#425937]">
      <div className="relative w-full h-full border-1 border-gray-300 border-t-0 rounded-lg text-center bg-white">


        <div className="w-full sm:h-130 lg:h-150 mr-5 ">
          <Image
            alt=""
            className="inset-0 w-full h-full object-cover rounded-t-lg"
            src={photoUrl}
          />
        </div>

        <div className="pt-5 px-4">
          <p>{restaurant}</p>
          <p className="font-bold text-4xl pt-4 pb-2">
            {restaurantName}
          </p>
          <p className={`font-bold pt-2 pb-2 ${quicksand.className}`}>
            {restaurantHall}
          </p>
          <p>{location}</p>
        </div>

        <div className="pt-5 px-4">
          <p className={`font-bold   ${quicksand.className}`}>
            <FontAwesomeIcon
              icon={faClock}
              className="animate-gentle-shake text-pink-500 text-1xl"
            />
            <span className="ml-2">Đón khách - {time}</span>{" "}
          </p>

          <p className={`font-bold ${quicksand.className}`}>
            <FontAwesomeIcon
              icon={faChampagneGlasses}
              className="animate-gentle-shake text-pink-500 text-1xl ml-2"
            />
            <span className="ml-2">Khai tiệc - {time2}</span>
          </p>
        </div>

        <div className="py-6">
          <div className="flex items-center justify-center bg-white">
            <div className="flex items-center space-x-4">
              <div className="border-y-1 border-gray-500 w-20 py-2">
                <span className="text-lg font-serif">{dayText}</span>
              </div>
              <div className="flex items-center space-x-2 py-2">
                <span className="text-4xl font-serif">{dayMonth}</span>
              </div>
              <div className="border-y-1 border-gray-500 w-20 py-2">
                <span className="text-lg font-serif">{year}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <p className="text-[#425937] italic text-sm">{alternativeDay}</p>
        </div>

        {
          <div className="social-link flex items-center place-content-center gap-2 pb-5">
            <a href={phoneNumber} title="phone">
              <FontAwesomeIcon
                icon={faPhone}
                className="animate-gentle-shake"
              />
            </a>
            <a
              href={googleMapLocation}
              title="map"
              target="_blank"
              className="text-red-500"
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                className="animate-bounce"
              />
            </a>
          </div>
        }
      </div>
    </div>
  );
}

export default EventCard;
