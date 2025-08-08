import { Link } from "react-router-dom";
import type { CategoryItemsType } from "../../../../Types/CategoryItemType.types";

const CategoryItems = ({ title, categoryIcon }: CategoryItemsType) => {
  return (
    <Link
      to="categories/category"
      className="flex flex-col items-center gap-2 group hover:-translate-y-2 transition-transform"
    >
      <div className="border-[#E9E9E8] border-2 px-8 py-10 rounded-lg group-hover:border-primary transition-colors max-xl:px-6 max-xl:py-8 max-lg:py-6 max-lg:px-4 max-sm:min-w-22 max-sm:flex  items-center justify-center">
        <img className="size-8 max-lg:size-6" src={categoryIcon} alt={`ایکون ${title}`} />
      </div>
      <span className="text-txt text-lg font-iran-yekan-bold group-hover:text-primary transition-colors max-xl:text-sm max-lg:text-[12px] max-sm:text-base max-sm:text-nowrap">
        {title}
      </span>
    </Link>
  );
};

export default CategoryItems;
