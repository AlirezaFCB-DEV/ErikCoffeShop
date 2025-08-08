import { BiSolidCoffeeBean } from "react-icons/bi";

const CategoryHeader = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex items-center gap-4 max-sm:flex-col justify-center">
        <BiSolidCoffeeBean className="text-primary text-7xl max-xl:text-6xl" />
        <div className="">
          <h2 className="font-morabba-bold text-3xl max-xl:text-2xl max-sm:text-center">دسته‌بندی‌محصولات</h2>
          <p className="">از میان بهترین‌ ها ، بهترین هارا برای شما فراهم کردیم!</p>
        </div>
      </div>
    </section>
  );
};

export default CategoryHeader;
