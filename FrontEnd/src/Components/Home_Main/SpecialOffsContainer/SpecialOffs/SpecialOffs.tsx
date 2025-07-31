import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Button from "../../../Button/Button.tsx";
import { specialOffsCategories } from "./SpecialOffsCategories.ts";
import Product from "../../../Product/Product.tsx";
import { useState } from "react";
import SPOffsAndTrainingWrapper from "../../../SPOffsAndTrainingWrapper/SPOffsAndTrainingWrapper.tsx";

const SpecialOffs = () => {
  const [coffeeCategoryItems] = useState([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  return (
    <SPOffsAndTrainingWrapper className="bg-white outline-[10px] outline-[#ffffff1a] drop-shadow-[#0000000D] drop-shadow-2xl w-[75%] h-[572px] absolute top-34 left-43.5 rounded-4xl px-18 py-8  max-[630px]:p-0 max-[630px]:top-60  max-[630px]:w-[90%]  max-[630px]:h-[340px] max-[630px]:text-nowrap max-[630px]:right-0 max-[630px]:mx-4">
      <div className="flex gap-20 items-center px-10 border-b-stroke border-b-2 max-[630px]:px-0 max-[630px]:relative max-[630px]:h-[20%]">
        <h3 className="font-iran-yekan-bold text-2xl max-[630px]:text-xl">
          دسته‌بندی ها
        </h3>
        <ul className="flex gap-10 text-sec-text">
          {specialOffsCategories.map((item) => (
            <li
              key={item.id}
              className={`${
                item.active ? "special-offs-category-item-active" : ""
              } py-2 group cursor-pointer relative`}
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
      <div className="h-[75%] w-[86%] bottom-8 absolute max-[630px]:relative  max-[630px]:h-[80%] max-[630px]:mx-8 ">
        <Button className="category-btn absolute -left-14 top-1/2 ">
          <BsChevronLeft className="category-btn-icon" />
        </Button>

        <div className="flex flex-nowrap overflow-x-scroll h-full gap-6 max-[630px]:relative   max-[630px]:w-[100%] max-[630px]:flex-wrap max-[630px]:h-full max-[630px]:text-sm">
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

        <Button className="category-btn absolute -right-14 top-1/2 ">
          <BsChevronRight className="category-btn-icon" />
        </Button>
      </div>
    </SPOffsAndTrainingWrapper>
  );
};

export default SpecialOffs;
