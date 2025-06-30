import { BiSolidCoffeeBean } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Button from "../../../Button/Button";

const CategoryHeader = () => {
  return (
    <section className="flex justify-between w-full items-center ">
      <div className="flex items-center gap-4">
        <BiSolidCoffeeBean className="text-primary text-7xl" />
        <div className="leading-10">
          <h2 className="font-morabba-bold text-3xl">دسته‌بندی‌محصولات</h2>
          <p>از میان بهترین‌ ها ، بهترین هارا برای شما فراهم کردیم!</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Button>
          <BsChevronRight className="category-btn-icon" />
        </Button>
        <Button>
          <BsChevronLeft className="category-btn-icon" />
        </Button>
      </div>
    </section>
  );
};

export default CategoryHeader;
