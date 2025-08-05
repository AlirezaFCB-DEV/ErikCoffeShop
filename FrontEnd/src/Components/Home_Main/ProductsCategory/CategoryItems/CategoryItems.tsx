import type { CategoryItemsType } from "../../../../Types/CategoryItemType.types";

const CategoryItems = ({ title, categoryIcon }: CategoryItemsType) => {
  return (
    <a
      href="#"
      className="flex flex-col items-center gap-2 group hover:-translate-y-2 transition-transform"
    >
      <div className="border-[#E9E9E8] border-2 px-8 py-10 rounded-lg group-hover:border-primary transition-colors max-xl:px-6 max-xl:py-8">
        <img className="size-8 " src={categoryIcon} alt={`ایکون ${title}`} />
      </div>
      <span className="text-txt text-lg font-iran-yekan-bold group-hover:text-primary transition-colors max-xl:text-sm">
        {title}
      </span>
    </a>
  );
};

export default CategoryItems;
