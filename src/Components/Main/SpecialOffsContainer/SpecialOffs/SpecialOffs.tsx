import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Button from "../../../Button/Button";
import { specialOffsCategories } from "./SpecialOffsCategories";

const SpecialOffs = () => {
  return (
    <div className="bg-white outline-[10px] outline-[#ffffff1a] drop-shadow-[#0000000D] drop-shadow-2xl w-[75%] h-[572px] absolute top-34 left-43.5 rounded-4xl px-18 py-8">
      <div className="flex gap-8 items-center justify-between px-10 border-b-stroke border-b-2">
        <h3 className="font-iran-yekan-bold text-2xl">دسته‌بندی ها</h3>
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
              <div className={`w-0 h-0.5 bg-primary group-hover:w-full transition-all absolute -bottom-0 ${item.active ? "hidden" : ""}`}></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-[75%] w-[86%] bottom-8  absolute">
        <Button className="absolute -left-14 top-1/2 -translate-y-1/2">
          <BsChevronLeft className="category-btn-icon" />
        </Button>

        <div></div>

        <Button className="absolute -right-14 top-1/2 -translate-y-1/2">
          <BsChevronRight className="category-btn-icon" />
        </Button>
      </div>
    </div>
  );
};

export default SpecialOffs;
