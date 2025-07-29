import type { CategoryItemsType } from "../CategoryItemType.types";

const CategoryItems = ({ title, categoryIcon }: CategoryItemsType) => {
  return (
    <a
      href="#"
      className="flex flex-col items-center gap-2 group hover:-translate-y-2 transition-transform max-[630px]:mx-4    max-[630px]:w-full"
    >
      <div className="border-[#E9E9E8] border-2 px-3 py-5 rounded-lg group-hover:border-primary transition-colors">
        <img className="size-8 " src={categoryIcon} alt={`ایکون ${title}`} />
      </div>
      <span className="text-txt font-iran-yekan-bold group-hover:text-primary transition-colors max-[630px]:text-nowrap">
        {title}
      </span>
    </a>
  );
};

export default CategoryItems;
