import ProductCategory from "./ProductsCategory/ProductsCategory";
import SpecialOffsContainer from "./SpecialOffsContainer/SpecialOffsContainer";

const Main = () => {
  return (
    <main className="container mx-auto flex flex-col gap-24">
      <ProductCategory />
      <SpecialOffsContainer />
    </main>
  );
};

export default Main;
