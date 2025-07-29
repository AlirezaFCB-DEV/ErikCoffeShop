import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "../../../Button/Button";
import { TrainingProducts } from "./TrainingPageProductsData";
import TrainingPageProduct from "./TrainingPageProduct/TrainingPageProduct";

const TrainingPageProducts = () => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-24 absolute top-30  px-16 ">
      <div className="flex gap-8">
        {TrainingProducts.length > 3
          ? ""
          : TrainingProducts.map((item) => (
            <TrainingPageProduct {...item} key={crypto.randomUUID()} />
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
export default TrainingPageProducts;
