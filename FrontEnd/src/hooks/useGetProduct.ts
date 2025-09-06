import { useEffect, useState } from "react";
import type ProductsProps from "../Types/Products.types";

const useGetProducts = (url: string) => {
  const [products, set_products] = useState<ProductsProps[] | null>(null);

  useEffect(() => {
    const fetch_data = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        set_products(data);
      } catch (err) {
        console.error("error in get products ", err);
      }
    };

    fetch_data();
  }, [url]);

  return [products];
};

export default useGetProducts;
