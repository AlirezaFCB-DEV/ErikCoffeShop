import { BiSolidCoffeeBean } from "react-icons/bi";
import { BestSellerCategories } from "./BestSellerCategoriesData";

const BestSellersCategories = () => {
  return (
    <section className="flex justify-around w-full items-center border-2 border-[#E9E9E8] rounded-full p-4 mx-auto">
      <div className="flex items-center gap-4">
        <BiSolidCoffeeBean className="text-primary text-5xl" />
        <div className="leading-10">
          <h2 className="font-morabba-bold text-3xl">پرفروش ترین ها</h2>
          <p>پرفروش ترین محصولات اریک کافه</p>
        </div>
      </div>
      <div className="flex gap-8 items-center justify-between p-5 bg-[#E9E9E8] rounded-3xl">
        <h3 className="font-iran-yekan-bold text-base bg-[#FFFFFF] rounded-xl p-2">دسته‌بندی ها</h3>
        <ul className="flex gap-10 text-sec-text">
          {BestSellerCategories.map((item) => (
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
    </section>
  );
};

export default BestSellersCategories;
