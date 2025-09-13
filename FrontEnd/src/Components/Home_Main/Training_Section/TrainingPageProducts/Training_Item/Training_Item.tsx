import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "../../../../Button/Button";
import SPOffsAndTrainingWrapper from "../../../../SPOffsAndTrainingWrapper/SPOffsAndTrainingWrapper";
import type { TrainingItemsProps } from "../Training_Items_Data";
import Img from "../../../../Img/Img";

const Training_Item = ({ img, date, text }: TrainingItemsProps) => {
  return (
    <>
      <SPOffsAndTrainingWrapper className="flex-1/3 hover:-translate-y-2 transition-transform group border-stroke bg-white border-2 py-4  px-3 flex flex-col  justify-between min-w-[360px] h-[400px]  select-none  cursor-pointer rounded-3xl outline-[10px] outline-[#ffffff1a] gap-y-12 max-xl:flex-1 max-xl:min-w-[420px] max-lg:min-w-[100%] max-lg:h-[450px] max-sm:h-fit">
        <div className="flex  justify-center flex-col gap-4 "> 
          <div className="flex justify-center">
            <Img
              src={img}
              alt="محصول"
              className="w-full h-[240px] max-lg:h-[260px] max-sm:h-[200px]"
            />
          </div>

          <div>
            <h3 className="font-iran-yekan-bold transition-colors group-hover:text-primary max-lg:text-lg max-sm:text-sm">
              {text}
            </h3>
          </div>
        </div>
        <div className="flex  justify-between  items-end h-full max-lg:px-6 max-sm:px-0">
          <div className="flex justify-center">
            <Button className="cursor-pointer text-primary gap-4 transition-colors flex justify-center text-center items-center relative">
              <span className="transition-colors text-sm max-lg:text-lg max-sm:text-sm">
                مشاهده بیشتر
              </span>
              <FaArrowLeftLong className="text-sm transition-colors" />
              <div className="w-0 right-0 bottom-0 group-hover:w-full transition-all absolute h-0.5 bg-primary"></div>
            </Button>
          </div>

          <div>
            <h3 className="font-iran-yekan-bold text-sm text-sec-text max-lg:text-lg max-sm:text-sm">
              {date}
            </h3>
          </div>
        </div>
      </SPOffsAndTrainingWrapper>
    </>
  );
};

export default Training_Item;
