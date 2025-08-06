import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "../../../Button/Button";
import { TrainingItems } from "./Training_Items_Data";
import Training_Item from "./Training_Item/Training_Item";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Training_Items = () => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-24 absolute top-30 px-16">
      <div className="flex gap-8 max-xl:overflow-x-scroll min-h-max py-6 px-3  max-xl:w-[100%] ">
        {TrainingItems.length > 3
          ? ""
          : TrainingItems.map((item) => (
              <Training_Item {...item} key={crypto.randomUUID()} />
          ))}
      </div>
        <Button className="xl_size_training_btns right-8" type="button" >
          <BsChevronRight className="text-4xl"/>
        </Button>
        <Button className="xl_size_training_btns left-8" type="button" >
          <BsChevronLeft className="text-4xl"/>
        </Button>
      <Button className="bs-products-btn group">
        <span className="text-xl group-hover:text-primary transition-colors">
          مشاهده بیشتر
        </span>
        <FaArrowLeftLong className="text-2xl group-hover:text-primary transition-colors" />
      </Button>
    </div>
  );
};
export default Training_Items;
