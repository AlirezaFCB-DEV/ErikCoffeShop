import type OffPercent from "../../Types/Off_Percent.type";

const Off_Percent = ({ percent }: OffPercent) => {
  return (
    <span className="absolute left-5 text-lg bg-black text-white px-3 py-0.5 rounded-full">
      {percent}٪
    </span>
  );
};

export default Off_Percent;
