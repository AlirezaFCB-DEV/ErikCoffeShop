import { BiSolidCoffeeBean } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Button from "../../../Button/Button";

const CategoryHeader = () => {
  return (
    <section className="flex justify-between w-full items-center ">
      <div className="flex items-center gap-4">
        <BiSolidCoffeeBean className="text-primary text-7xl max-[630px]:text-4xl" />
        <div className="leading-10">
          <h2 className="font-morabba-bold text-3xl max-[630px]:text-2xl">دسته‌بندی‌محصولات</h2>
          <p className="max-[630px]:text-sm">از میان بهترین‌ ها ، بهترین هارا برای شما فراهم کردیم!</p>
        </div>
      </div>
      <div className="flex gap-4 max-[630px]:hidden">
        <Button className="category-btn group">
          <BsChevronRight className="category-btn-icon" />
        </Button>
        <Button className="category-btn group">
          <BsChevronLeft className="category-btn-icon" />
        </Button>
      </div>
    </section>
  );
};

export default CategoryHeader;
