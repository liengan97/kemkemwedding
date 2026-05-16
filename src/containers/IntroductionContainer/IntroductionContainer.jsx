import IntroductionCard from "@/components/IntroductionCard/IntroductionCard";
import { PIntro } from "@/config/photo.config";

function IntroductionContainer() {
  return (
    <div className="md:w-3/5 sm:w-full mx-auto py-10 relative dark:bg-white intro-container">
      <div className="flex items-center flex-col">
        <div className="text-xl lg:text-3xl pb-10 font-bold text-[#126DA6] font-serif">
          <p>CHÚ RỂ & CÔ DÂU</p>
        </div>
      </div>
      <div className="relative grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 lg:gap-2 pb-10">
        <div className="md:pr-3 md:rounded-lg font-light rounded-md h-150">
          <IntroductionCard
            name="NGUYỄN NAM TIẾN"
            birthday="Út Nam"
            photoUrl={PIntro.Groom}
          />
        </div>
        <div className="md:pl-3 rounded-md font-light h-150">
          <IntroductionCard
            name="LÊ HUỲNH NGỌC HÂN"
            birthday="Út Nữ"
            photoUrl={PIntro.Bride}
          />
        </div>
      </div>
    </div>
  );
}

export default IntroductionContainer;
