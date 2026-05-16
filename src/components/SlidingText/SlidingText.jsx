import { useEffect } from "react";
import { courgette } from "@/utils/font.util";

const dates = ["Chủ nhật, 14", "Chủ nhật, 14"];

const SlidingText = () => {
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
      @keyframes slideUp1 {
        0% { transform: translateY(100%); opacity: 0; } /* Start below container */
        10% { transform: translateY(0); opacity: 1; } /* Slide up into container (1s) */
        40% { transform: translateY(0); opacity: 1; } /* Stay for 3s (10% to 40%) */
        50% { transform: translateY(-100%); opacity: 0; } /* Slide up and out (1s) */
        100% { transform: translateY(-100%); opacity: 0; } /* Stay out of view */
      }
    `);
    styleSheet.insertRule(`
      @keyframes slideUp2 {
        0%, 50% { transform: translateY(100%); opacity: 0; } /* Wait until 50% (5s) */
        50% { transform: translateY(100%); opacity: 0; } /* Start sliding in as first exits */
        60% { transform: translateY(0); opacity: 1; } /* Slide up into container (1s) */
        90% { transform: translateY(0); opacity: 1; } /* Stay for 3s (60% to 90%) */
        100% { transform: translateY(-100%); opacity: 0; } /* Slide up and out (1s) */
      }
    `);
  }, []);

  return (
    <div>
      <div className="flex items-center flex-col">
        <h2 className="text-md lg:text-xl pt-5 pb-5 text-[#425937]">
          CÙNG ĐẾM NGƯỢC THỜI GIAN
        </h2>
        <div className="text-3xl lg:text-3xl pb-5 font-bold text-[#425937] font-serif">
          <p>SAVE THE DATE</p>
        </div>
      </div>

      <div
        className={`flex items-center space-x-2 text-2xl md:text-3xl lg:text-4xl font-bold ${courgette.className} fw-600`}
      >
        <div className="relative h-12 lg:w-51 w-34 flex items-center justify-center overflow-hidden">
          <style>
            {`
            .slide-text-1, .slide-text-2 {
              position: absolute;
              top-0;
              width: 100%;
              text-align: center;
              line-height: 1.2;
            }
            .slide-text-1 {
              animation: slideUp1 10s ease-in-out infinite;
            }
            .slide-text-2 {
              animation: slideUp2 10s ease-in-out infinite;
            }
          `}
          </style>

          {dates.map((date, index) => (
            <span
              key={index}
              className={`slide-text-${index + 1} text-[#425937]  fw-600`}
            >
              {date}
            </span>
          ))}
        </div>
        <span className={`text-[#425937]  fw-600`}>Tháng 6 Năm 2026</span>
      </div>
    </div>
  );
};

export default SlidingText;
