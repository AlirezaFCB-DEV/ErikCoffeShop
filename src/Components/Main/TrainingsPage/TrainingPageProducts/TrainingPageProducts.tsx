import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "../../../Button/Button";
import { TrainingProducts } from "./TrainingPageProductsData";
// import TrainingPageProduct from "./TrainingPageProduct";

const TrainingPageProducts = () => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-24 absolute top-30  px-18 ">
      <div className="flex  justify-around ">
        {TrainingProducts.length > 4
          ? ""
          : TrainingProducts.map((item) => (
              <div
                className={`w-1/4 border-stroke bg-white border-2   px-4 flex flex-col  justify-between  select-none  cursor-pointer rounded-4xl outline-[10px] outline-[#ffffff1a] drop-shadow-[#0000000D] drop-shadow-2xl`}
              >
                <div className="flex  justify-center flex-col ">
                  <div className="flex justify-center">
                    <img
                      src={item?.img}
                      alt="محصول"
                      className="w-full h-[240px] object-contain "
                    />
                  </div>

                  <div>
                    <h3 className="font-iran-yekan-bold transition-colors group-hover:text-primary">
                      {item?.text}
                    </h3>
                  </div>
                </div>
                <div className="flex  justify-between  h-full my-4">
                  <div className="flex justify-center">
                    <button className="text-primary hover:text-white group transition-colors flex justify-center text-center items-center">
                      <span className="text-lg group-hover:text-white transition-colors">
                        مشاهده بیشتر
                      </span>
                      <FaArrowLeftLong className="text-lg group-hover:text-white transition-colors" />
                    </button>
                  </div>

                  <div>
                    <h3 className="font-iran-yekan-bold transition-colors group-hover:text-primary">
                      {item?.date}
                    </h3>
                  </div>
                </div>
              </div>
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
