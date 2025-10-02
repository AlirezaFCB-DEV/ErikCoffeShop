import Button from "../../Button/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import useGetProducts from "../../../hooks/useGetProduct";
import Product from "../../Product/Product";

const BestSellersProducts = () => {
  const [products] = useGetProducts("/Data/products.json");

  return (
    <div className="flex flex-col items-center gap-24">
      <div className="flex flex-wrap max-sm:w-full justify-center gap-23 max-2xl:gap-10">
        {products
          ?.slice(0, 10)
          .sort((a, b) => b.price - a.price)
          ?.map((product) => (
            <Product
              realPrice={product.price}
              offPercent={product.off_percent}
              img={product.image}
              route={`/products/${product.category}/product-${product.id}`}
              sizeClass="best-sellers-products"
              subTitle={product.category}
              title={product.name}
              key={product.id}
            />
          ))}
      </div>
      <Button className="bs-products-btn group">
        <span className="text-xl group-hover:text-primary transition-colors">
          مشاهده بیشتر
        </span>
        <FaArrowLeftLong className="text-2xl group-hover:text-primary transition-colors" />
      </Button>
    </div>
  );
};

export default BestSellersProducts;
