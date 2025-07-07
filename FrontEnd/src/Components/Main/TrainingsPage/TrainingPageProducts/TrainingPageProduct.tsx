import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "../../../Button/Button";
import SPOffsAndTrainingWrapper from "../../../SPOffsAndTrainingWrapper/SPOffsAndTrainingWrapper";
import type { TrainingItems } from "./TrainingPageProductsData";

const TrainingPageProduct = ({ img, button, date, text }: TrainingItems) => {
  return (
    <>
      <SPOffsAndTrainingWrapper className="w-1/3 hover:-translate-y-2 transition-transform group border-stroke bg-white border-2 py-4  px-3 flex flex-col  justify-between  select-none  cursor-pointer rounded-3xl outline-[10px] outline-[#ffffff1a] drop-shadow-[#0000000D] drop-shadow-2xl gap-y-12">
        <div className="flex  justify-center flex-col gap-4 ">
          <div className="flex justify-center">
            <img src={img} alt="محصول" className="w-full h-[240px]" />
          </div>

          <div>
            <h3 className="font-iran-yekan-bold transition-colors group-hover:text-primary">
              {text}
            </h3>
          </div>
        </div>
        <div className="flex  justify-between  h-full">
          <div className="flex justify-center">
            <Button className="cursor-pointer text-primary gap-4 transition-colors flex justify-center text-center items-center relative">
              <span className="transition-colors text-sm">مشاهده بیشتر</span>
              <FaArrowLeftLong className="text-sm transition-colors" />
              <div className="w-0 right-0 bottom-0 group-hover:w-full transition-all absolute h-0.5 bg-primary"></div>
            </Button>
          </div>

          <div>
            <h3 className="font-iran-yekan-bold text-sm text-sec-text">
              {date}
            </h3>
          </div>
        </div>
      </SPOffsAndTrainingWrapper>
    </>
  );
};

export default TrainingPageProduct;
