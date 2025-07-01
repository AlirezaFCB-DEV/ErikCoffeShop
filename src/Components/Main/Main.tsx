import ProductCategory from "./ProductsCategory/ProductsCategory";
import SpecialOffs from "./SpecialOffsContainer/SpecialOffsContainer";

const Main = () => {
  return (
    <main className="container mx-auto flex flex-col gap-24">
      <ProductCategory />
      <SpecialOffs></SpecialOffs>
    </main>
  );
};

export default Main;
