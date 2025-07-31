import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "../../../Button/Button";
import { TrainingItems } from "./Training_Items_Data";
import Training_Item from "./Training_Item/Training_Item";

const Training_Items = () => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-24 absolute top-30  px-16 ">
      <div className="flex gap-8">
        {TrainingItems.length > 3
          ? ""
          : TrainingItems.map((item) => (
              <Training_Item {...item} key={crypto.randomUUID()} />
            ))}
      </div>
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
