import BannerPage from "./Banner/BannerPage";
import BestSellersContainer from "./BestSellersContainer/BestSellersContainer";
import ProductCategory from "./ProductsCategory/ProductsCategory";
import SpecialOffsContainer from "./SpecialOffsContainer/SpecialOffsContainer";

const Main = () => {
  return (
    <main className="container mx-auto flex flex-col gap-24">
      <ProductCategory />
      <SpecialOffsContainer />
      <BannerPage />
      <BestSellersContainer />
    </main>
  );
};

export default Main;
