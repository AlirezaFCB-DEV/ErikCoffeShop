import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Button from "../../../Button/Button.tsx";
import { specialOffsCategories } from "./SpecialOffsCategories.ts";
import Product from "../../../Product/Product.tsx";
import { useState } from "react";
import SPOffsAndTrainingWrapper from "../../../SPOffsAndTrainingWrapper/SPOffsAndTrainingWrapper.tsx";

const SpecialOffs = () => {
  const [coffeeCategoryItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <SPOffsAndTrainingWrapper className="bg-white outline-[10px] outline-[#ffffff1a] drop-shadow-[#0000000D] drop-shadow-2xl w-[80%] h-[572px] absolute top-34 left-43.5 rounded-4xl px-18 py-8 max-xl:left-26 max-xl:px-10 max-xl:h-[510px]">
      <div className="flex gap-16 items-center px-10 border-b-stroke border-b-2 max-2xl:gap-10 max-xl:gap-6 max-xl:px-5">
        <h3 className="font-iran-yekan-bold text-xl text-nowrap max-2xl:text-lg  max-xl:text-xl max-xl:text-nowrap">
          دسته‌بندی ها
        </h3>
        <ul className="flex items-center gap-20 text-sec-text max-[1680px]:gap-16 max-2xl:gap-8 max-xl:gap-6">
          {specialOffsCategories.map((item) => (
            <li
              key={item.id}
              className={`${
                item.active ? "special-offs-category-item-active" : ""
              } py-3 group cursor-pointer text-nowrap relative max-2xl:text-base max-xl:text-sm `}
            >
              <button className=" cursor-pointer group-hover:text-primary">
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
      </div>
      <div className="h-[75%] w-[90%] max-xl:w-[90%] bottom-8 absolute max-xl: max-[630px]:relative  max-[630px]:h-[80%] max-[630px]:mx-8 ">
        <Button className="category-btn absolute -left-10 top-1/2  max-xl:-left-5">
          <BsChevronLeft className="category-btn-icon" />
        </Button>

        <Button className="category-btn absolute -right-14 top-1/2 max-xl:-right-5 ">
          <BsChevronRight className="category-btn-icon" />
        </Button>

        <div className="flex flex-nowrap overflow-x-scroll h-full gap-6">
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
