import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "../../../Button/Button";
import { TrainingItems } from "./Training_Items_Data";
import Training_Item from "./Training_Item/Training_Item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import responsive_count_slides from "../../../../hooks/responsive_count_slides";

const Training_Items = () => {
  const slide_counts = responsive_count_slides(3);

  return (
    <div className=" w-full h-full flex flex-col items-center gap-24 absolute top-30 px-10 max-lg:px-20 max-lg:gap-16 max-sm:px-4">
      <div className="flex gap-8 min-h-max py-6  max-xl:w-[100%] max-sm:px-2 max-xl:overflow-hidden` ">
        {window.innerWidth >= 1280 ? (
          TrainingItems.length &&
          TrainingItems.slice(
            TrainingItems.length - 3,
            TrainingItems.length
          ).map((item) => <Training_Item {...item} />)
        ) : (
          <Swiper
            spaceBetween={5}
            slidesPerView={slide_counts}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className=""
          >
            {TrainingItems.length &&
              TrainingItems.slice(
                TrainingItems.length - 3,
                TrainingItems.length
              ).map((item) => (
                <SwiperSlide key={item.id} className="py-3 px-4">
                  <Training_Item {...item} />
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
      {/* <Button
        className="xl_size_training_btns right-8 max-sm:right-0"
        type="button"
      >
        <BsChevronRight className="text-4xl" />
      </Button>
      <Button
        className="xl_size_training_btns left-8 max-sm:left-0"
        type="button"
      >
        <BsChevronLeft className="text-4xl" />
      </Button> */}
      <Button className="bs-products-btn group">
        <span className="text-xl group-hover:text-primary transition-colors">
          مشاهده بیشتر
        </span>
        <FaArrowLeftLong className="text-2xl group-hover:text-primary transition-colors" />
      </Button>
    </div>
  );
};
export default Training_Items;
