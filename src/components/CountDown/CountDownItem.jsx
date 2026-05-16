import { courgette } from "@/utils/font.util";

function CountDownItem({ text, value }) {
  return (
    <div
      className={`flex flex-col p-2 bg-white rounded-box items-center text-[#126DA6]`}
    >
      <span className="countdown font-mono text-4xl md:text-6xl text-center">
        <span style={{ "--value": value }} aria-label={value}>
          {value}
        </span>
      </span>
      <span className={`text-sm ${courgette.className}`}>
        {text?.toUpperCase()}
      </span>
    </div>
  );
}

export default CountDownItem;
