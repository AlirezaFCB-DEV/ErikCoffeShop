// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// import Button from "../../../Button/Button.tsx";
import Product from "../../../Product/Product.tsx";
import SPOffsAndTrainingWrapper from "../../../SPOffsAndTrainingWrapper/SPOffsAndTrainingWrapper.tsx";
import useGetProducts from "../../../../hooks/useGetProduct.ts";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import responsive_count_slides from "../../../../hooks/responsive_count_slides";

import "swiper/css";
import "swiper/css/navigation";

const SpecialOffs = () => {
  const [products] = useGetProducts("/Data/products.json");

  const slides_counts = responsive_count_slides(4);

  return (
    <SPOffsAndTrainingWrapper className="bg-white outline-[10px] outline-[#ffffff1a] drop-shadow-[#0000000D] drop-shadow-2xl w-[85%] absolute top-30 left-1/2 -translate-x-1/2 rounded-4xl py-8  max-xl:w-4/5 max-xl:px-7.5 flex justify-center items-center px-8 max-sm:w-[95%] max-sm:outline-8">
      <div className=" w-full ">
        {/* <Button
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
        </Button> */}

        {products !== null ? (
          <Swiper
            spaceBetween={20}
            slidesPerView={slides_counts}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="h-full w-full"
          >
            {products
              .slice(0, 10)
              .sort((a, b) => b.off_percent - a.off_percent)
              ?.map((product) => (
                <SwiperSlide key={product.id}>
                  <Product
                    img={product.image}
                    title={product.name}
                    realPrice={product.price}
                    offPercent={product.off_percent}
                    subTitle={product.category}
                    sizeClass="special-offs-product"
                    route={`/products/${product.id}`}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        ) : (
          "Loading..."
        )}
      </div>
    </SPOffsAndTrainingWrapper>
  );
};

export default SpecialOffs;
