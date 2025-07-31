import BannerPage from "./Banner/BannerPage";
import BestSellersContainer from "./BestSellersContainer/BestSellersContainer";
import ProductCategory from "./ProductsCategory/ProductsCategory";
import SpecialOffsContainer from "./SpecialOffsContainer/SpecialOffsContainer";
import Training_Section from "./Training_Section/Training_Section";

const Home_Main = () => {
  return (
    <main className="container flex flex-col gap-24 max-[630px]:overflow-hidden  max-[630px]:justify-items-stretch pb-92 ">
      <ProductCategory />
      <SpecialOffsContainer />
      <BannerPage />
      <BestSellersContainer />
      <Training_Section />
    </main>
  );
};

export default Home_Main;
