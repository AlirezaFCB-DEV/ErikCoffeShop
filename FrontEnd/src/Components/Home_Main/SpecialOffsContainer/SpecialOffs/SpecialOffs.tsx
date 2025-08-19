import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Button from "../../../Button/Button.tsx";
import Product from "../../../Product/Product.tsx";
import SPOffsAndTrainingWrapper from "../../../SPOffsAndTrainingWrapper/SPOffsAndTrainingWrapper.tsx";
import useGetProducts from "../../../../hooks/useGetProduct.ts";

const SpecialOffs = () => {
  const [products] = useGetProducts("/Data/products.json");

  return (
    <SPOffsAndTrainingWrapper className="bg-white outline-[10px] outline-[#ffffff1a] drop-shadow-[#0000000D] drop-shadow-2xl w-[85%] absolute top-30   left-1/2 -translate-x-1/2 rounded-4xl py-8  max-xl:w-4/5 max-xl:px-7.5 flex justify-center items-center px-8">
      <div className=" w-full relative flex justify-center ">
        <Button className="category-btn absolute -left-4 top-1/2  max-xl:-left-3 max-sm:-left-2">
          <BsChevronLeft className="category-btn-icon" />
        </Button>

        <Button className="category-btn absolute -right-4 top-1/2 max-xl:-right-3 max-sm:-right-2 ">
          <BsChevronRight className="category-btn-icon" />
        </Button>

        <div className="grid  grid-flow-col auto-cols-[23%] gap-8 max-xl:auto-cols-[30%] max-xl:gap-8.5 max-lg:auto-cols-[48%] max-lg:gap-4 overflow-x-scroll max-md:auto-cols-[100%] custom_scroll pb-2">
          {products !== null
            ? products?.map((product) => (
                <Product
                  key={product.id}
                  img={product.image}
                  title={product.name}
                  realPrice={product.price}
                  offPercent={product.off_percent}
                  subTitle={product.category}
                  sizeClass="special-offs-product"
                  route={`/products/${product.id}`}
                />
              ))
            : "Loading..."}
        </div>
      </div>
    </SPOffsAndTrainingWrapper>
  );
};

export default SpecialOffs;
