import "./styles.css";
import { PEvents } from "@/config/photo.config";
import EventCard from "@/components/EventCard/EventCard";
import Title from "@/components/Title/Title";
import { quicksand } from "@/utils/font.util";

function WeddingEventsContainer() {
  return (
    <div className="md:w-3/5 mx-auto py-10 relative">
      <div className="flex items-center flex-col pb-5 px-5 text-center event">
        <h2 className="py-5 text-xl lg:text-3xl pb-5 text-[#126DA6] font-bold font-serif">
          LỄ THÀNH HÔN
        </h2>
        <p className={`text-[#126DA6] ${quicksand.className}`}>
          Hân hạnh mời bạn đến dự lễ thành hôn của chúng tôi!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1">
        <EventCard
          photoUrl={PEvents.May24}
          title="Nam Tiến & Ngọc Hân"
          restaurant=""
          restaurantName="CẢNG DU THUYỀN MỸ THO"
          restaurantHall="Sảnh SUNNY - Nhỏ 1"
          location="Số 1, Hoàng Sa, Phường Đạo Thạnh, Đồng Tháp"
          time="10:30"
          time2="11:30"
          dayText="Chủ Nhật"
          dayMonth="14/06"
          year="2026"
          phoneNumber="tel:(+84)949934595"
          alternativeDay="Nhằm ngày 29 tháng 04 năm Bính Ngọ"
          googleMapLocation="https://maps.app.goo.gl/VjyJTjEbq6Bgea5J8"
        />
      </div>
    </div>
  );
}

export default WeddingEventsContainer;
