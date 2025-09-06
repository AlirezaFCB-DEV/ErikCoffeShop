import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type slide_props from "../../../../../Types/SlidesProps.types";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Slider = () => {
  const slides: slide_props[] = [
    {
      id: 1,
      img_element: (
        <img
          src="/images/Banners/cofe_erick-sliderbanner_2desktop-1.jpg"
          alt="بنر تبلیغاتی"
          className="h-full"
        />
      ),
      route: `/products`,
    },
    {
      id: 2,
      img_element: (
        <img
          src="/images/Banners/cofe_erick-sliderbanner_1desktop.jpg"
          alt="بنر تبلیغاتی"
          className="h-full"
        />
      ),
      route: "/products",
    },
    {
      id: 3,
      img_element: (
        <img
          src="/images/Banners/cofe_erick-sliderbanner_1desktop.jpg"
          alt="بنر تبلیغاتی"
          className="h-full"
        />
      ),
      route: "/products",
    },
  ];

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="h-full"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Link to={slide.route}>{slide.img_element}</Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
