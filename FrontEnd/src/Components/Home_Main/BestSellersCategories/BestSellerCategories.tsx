import { BiSolidCoffeeBean } from "react-icons/bi";
import { BestSellerCategories } from "./BestSellerCategoriesData";

const BestSellersCategories = () => {
  return (
    <section className="flex justify-between w-full items-center border-2 border-stroke rounded-full py-4 px-6 mx-auto max-2xl:px-4 max-xl:flex-col max-xl:gap-4 max-xl:rounded-3xl">
      <div className="flex items-center gap-4 max-2xl:gap-1">
        <BiSolidCoffeeBean className="text-primary text-5xl max-2xl:text-4xl" />
        <div className="">
          <h2 className="font-morabba-bold text-3xl max-2xl:text-2xl">پرفروش ترین ها</h2>
          <p className="max-2xl:text-sm text-nowrap">پرفروش ترین محصولات اریک کافه</p>
        </div>
      </div>
      <div className="flex gap-8 items-center justify-between py-5 px-10 bg-stroke rounded-full max-2xl:py-3 max-2xl:px-5 max-xl:w-full max-lg:gap-8">
        <h3 className="font-iran-yekan-bold text-base bg-[#FFFFFF] rounded-full p-1.5 text-nowrap">دسته‌بندی ها</h3>
        <ul className="flex gap-10 text-sec-text max-2xl:gap-8 max-lg:overflow-scroll max-lg:gap-15">
          {BestSellerCategories.map((item) => (
            <li
              key={item.id}
              className={`${
                item.active ? "text-primary font-iran-yekan-bold " : ""
              } py-2 group cursor-pointer relative text-nowrap`}
            >
              <button className=" cursor-pointer group-hover:text-primary">
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BestSellersCategories;
