import BannerPage from "./Banner/BannerPage";
import BestSellerProducts from "./BestSellerProducts/BestSellerProducts";
import ProductCategory from "./ProductsCategory/ProductsCategory";
import SpecialOffsContainer from "./SpecialOffsContainer/SpecialOffsContainer";

const Main = () => {
  return (
    <main className="container mx-auto flex flex-col gap-24">
      <ProductCategory />
      <SpecialOffsContainer />
      <BannerPage />
      <BestSellerProducts />
    </main>
  );
};

export default Main;
