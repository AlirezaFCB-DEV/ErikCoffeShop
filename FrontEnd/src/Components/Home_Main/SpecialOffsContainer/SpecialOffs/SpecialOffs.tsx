import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Button from "../../../Button/Button.tsx";
import Product from "../../../Product/Product.tsx";
import SPOffsAndTrainingWrapper from "../../../SPOffsAndTrainingWrapper/SPOffsAndTrainingWrapper.tsx";
import useGetProducts from "../../../../hooks/useGetProduct.ts";
import { useEffect, useRef } from "react";

const SpecialOffs = () => {
  const [products] = useGetProducts("/Data/products.json");

  const special_offs_slider_ref = useRef<HTMLDivElement>(null);

  type scroll_dir = "r" | "l";

  const scroll_handler = (dir: scroll_dir): void => {
    const slider = special_offs_slider_ref.current;

    if (!slider) return;

    const slider_last_child = slider.lastChild as HTMLLinkElement;

    if (!slider_last_child) return;

    if (window.screen.width <= 768) {
      switch (dir) {
        case "l":
          slider.scrollLeft == slider_last_child.offsetLeft
            ? slider.scrollTo({ left: 0 })
            : slider.scrollBy({ left: -slider_last_child.clientWidth });
          break;
        case "r":
          slider.scrollLeft == 0
            ? slider.scrollTo({ left: slider_last_child.offsetLeft })
            : slider.scrollBy({ left: slider_last_child.clientWidth });
          break;
      }
    } else {
      switch (dir) {
        case "l":
          slider.scrollLeft == slider_last_child.offsetLeft
            ? slider.scrollTo({ left: 0 })
            : slider.scrollBy({ left: -(slider_last_child.clientWidth + 31) });
          break;
        case "r":
          slider.scrollLeft == 0
            ? slider.scrollTo({ left: slider_last_child.offsetLeft })
            : slider.scrollBy({ left: slider_last_child.clientWidth + 31 });
          break;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll_handler("l");
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <SPOffsAndTrainingWrapper className="bg-white outline-[10px] outline-[#ffffff1a] drop-shadow-[#0000000D] drop-shadow-2xl w-[85%] absolute top-30   left-1/2 -translate-x-1/2 rounded-4xl py-8  max-xl:w-4/5 max-xl:px-7.5 flex justify-center items-center px-8">
      <div className=" w-full relative flex justify-center ">
        <Button
          onClick={() => scroll_handler("l")}
          className="category-btn absolute -left-4 top-1/2  max-xl:-left-3 max-sm:-left-2"
        >
          <BsChevronLeft className="category-btn-icon" />
        </Button>

        <Button
          onClick={() => scroll_handler("r")}
          className="category-btn absolute -right-4 top-1/2 max-xl:-right-3 max-sm:-right-2 "
        >
          <BsChevronRight className="category-btn-icon" />
        </Button>

        <div
          className="grid  grid-flow-col auto-cols-[23%] max-2xl:auto-cols-[31.3%] gap-7 max-xl:auto-cols-[47.5%] max-xl:gap-8.5 max-lg:auto-cols-[48%] max-lg:gap-4 no_scroll_x overflow-x-scroll max-md:auto-cols-[100%] custom_scroll pb-4 scroll-smooth max-md:gap-0"
          ref={special_offs_slider_ref}
        >
          {products !== null
            ? products
                .slice(0, 10)
                .sort((a, b) => b.off_percent - a.off_percent)
                ?.map((product) => (
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
