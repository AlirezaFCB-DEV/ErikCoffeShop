import { useState } from "react";
import Product, { type ProductProps } from "../../Product/Product";
import Button from "../../Button/Button";
import { FaArrowLeftLong } from "react-icons/fa6";

const BestSellersProducts = () => {
  const [productsArr, setProductsArray] = useState<ProductProps[]>(
    Array.from({ length: 8 }, (_) => ({
      img: "/images/Products/product1.png",
      offPercent: 10,
      realPrice: 2_500_000,
      subTitle: "دانه قهوه",
      title: "دانه قهوه باکسی برند",
      sizeClass: "best-sellers-products",
    }))
  );


  return (
    <div className="flex flex-col items-center gap-24">
      <div className="flex flex-wrap justify-between gap-y-10">
        {productsArr.length > 8
          ? ""
          : productsArr.map((item) => <Product {...item}  key={crypto.randomUUID()}/>)}
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
