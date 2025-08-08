import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Button from "../../../Button/Button.tsx";
import { specialOffsCategories } from "./SpecialOffsCategories.ts";
import Product from "../../../Product/Product.tsx";
import { useState } from "react";
import SPOffsAndTrainingWrapper from "../../../SPOffsAndTrainingWrapper/SPOffsAndTrainingWrapper.tsx";

const SpecialOffs = () => {
  const [coffeeCategoryItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <SPOffsAndTrainingWrapper className="bg-white outline-[10px] outline-[#ffffff1a] drop-shadow-[#0000000D] drop-shadow-2xl w-[85%] h-[572px] absolute top-34 left-1/2 -translate-x-1/2 rounded-4xl px-18 py-8  max-xl:w-4/5 max-xl:px-10 max-xl:h-[510px]">

      <div className="flex gap-20 items-center px-10 border-b-stroke border-b-2 max-2xl:gap-10 max-xl:gap-6 max-xl:px-5 relative max-sm:flex-col max-sm:justify-center max-sm:px-2 max-sm:gap-2">

        <h3 className="font-iran-yekan-bold text-xl text-nowrap max-2xl:text-lg  max-xl:text-xl max-xl:text-nowrap max-sm:text-[12px]">
          دسته‌بندی ها
        </h3>

        <ul className="flex items-center gap-20 text-sec-text max-2xl:gap-8 max-xl:gap-6 max-lg:overflow-scroll max-sm:gap-3 w-full">
          {specialOffsCategories.map((item) => (
            <li
              key={item.id}
              className={`${
                item.active ? "special-offs-category-item-active" : ""
              } py-3 group cursor-pointer  text-lg text-nowrap relative max-2xl:text-base max-xl:text-sm max-sm:text-[12px] max-sm:min-w-1/2`}
            >
              <button className=" cursor-pointer group-hover:text-primary max-sm:w-full text-center">
                {item.title}
              </button>
              <div
                className={`w-0 h-0.5 bg-primary group-hover:w-full transition-all absolute -bottom-0 ${
                  item.active ? "hidden" : ""
                }`}
              ></div>
            </li>
          ))}
        </ul>

        <Button className="hidden max-md:block absolute left-1 max-sm:-left-5 max-sm:top-9 text-xl">
          <BsChevronLeft />
        </Button>
        <Button className="hidden  max-md:block absolute right-36 text-xl max-sm:-right-5 max-sm:top-9">
          <BsChevronRight />
        </Button>
      </div>
      <div className="h-[75%] w-[90%] left-1/2 -translate-x-1/2 max-xl:w-[90%] bottom-4 absolute">
        <Button className="category-btn absolute -left-4 top-1/2  max-xl:-left-3 max-sm:-left-2">
          <BsChevronLeft className="category-btn-icon" />
        </Button>

        <Button className="category-btn absolute -right-4 top-1/2 max-xl:-right-3 max-sm:-right-2 ">
          <BsChevronRight className="category-btn-icon" />
        </Button>

        <div className="flex flex-nowrap overflow-x-scroll h-full gap-7.5 max-xl:gap-6 max-md:gap-0.5">
          {coffeeCategoryItems.map(() => (
            <Product
              key={crypto.randomUUID()}
              img="/images/Products/product1.png"
              offPercent={50}
              realPrice={2_500_000}
              subTitle="دانه قهوه"
              title="دانه قهوه باکسی برند"
              sizeClass="special-offs-product"
            />
          ))}
        </div>
      </div>
    </SPOffsAndTrainingWrapper>
  );
};

export default SpecialOffs;
