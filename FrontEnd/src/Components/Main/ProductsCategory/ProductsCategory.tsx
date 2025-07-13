import CategoryHeader from "./CategoryHeader/CategoryHeader";
import CategoryItems from "./CategoryItems/CategoryItems";
import categoryItemsData from "./categoryItemsData";

const ProductCategory = () => {
  return (
    <section className="flex flex-col gap-10   ">
      <CategoryHeader />
      <div className="flex justify-between items-end   max-[630px]:overflow-x-scroll">
        {categoryItemsData.map((item) => (
          <div className="">
            <CategoryItems
              key={item.id}
              title={item.title}
              categoryIcon={item.categoryIcon}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;
