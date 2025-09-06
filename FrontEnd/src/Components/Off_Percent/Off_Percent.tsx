import type OffPercent from "../../Types/Off_Percent.type";

const Off_Percent = ({ percent }: OffPercent) => {
  return (
    <span className="absolute left-5 top-5 text-lg bg-black text-white px-3 py-0.5 rounded-full max-xl:text-base">
      {percent.toLocaleString("fa-IR")}٪
    </span>
  );
};

export default Off_Percent;
