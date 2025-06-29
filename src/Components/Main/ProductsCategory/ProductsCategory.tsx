import CategoryHeader from "./CategoryHeader/CategoryHeader";
import CategoryItems from "./CategoryItems/CategoryItems";
import categoryItemsData from "./categoryItemsData";

const ProductCategory = () => {
  return (
    <section className="container mx-auto flex flex-col gap-10">
      <CategoryHeader />
      <div className="flex justify-between items-end">
        {categoryItemsData.map((item) => (
          <CategoryItems title={item.title} categoryIcon={item.categoryIcon} />
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;
