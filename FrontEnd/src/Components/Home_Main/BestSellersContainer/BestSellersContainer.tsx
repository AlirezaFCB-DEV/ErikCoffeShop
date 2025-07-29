import BestSellersCategories from "../BestSellersCategories/BestSellerCategories";
import BestSellersProducts from "../BestSellersProducts/BestSellersProducts";

const BestSellersContainer = () => {
  return (
    <div className="flex flex-col gap-y-12">
      <BestSellersCategories />
      <BestSellersProducts />
    </div>
  );
};

export default BestSellersContainer;
