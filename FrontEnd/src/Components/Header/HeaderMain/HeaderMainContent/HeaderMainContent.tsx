import { FaArrowLeftLong } from "react-icons/fa6";
import { ImLeaf } from "react-icons/im";
import Button from "../../../Button/Button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import type slide_props from "../../../../Types/SlidesProps.types";

const HeaderMainContent = () => {
  const slides: slide_props[] = [
    {
      id: 1,
      img_element: (
        <img
          src="/images/Banners/cofe_erick-sliderbanner_2desktop-1.jpg"
          alt="بنر تبلیغاتی"
          className=" h-full w-full "
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
          className=" h-full w-full "
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
          className=" h-full w-full "
        />
      ),
      route: "/products",
    },
  ];

  const [current_index, set_current_index] = useState(0);
  const slider_ref = useRef<HTMLDivElement>(null);

  const go_to_slide = (index: number) => {
    set_current_index(index);
  };

  const next_slide = () => {
    set_current_index((prev) =>
      prev === slides.length - 1 ? slides.length - slides.length : prev + 1
    );
  };

  const prev_slide = () => {
    set_current_index((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slider = slider_ref.current;

    if (slider) {
      slider.style.transform = `translateX(${current_index * 100}%)`;
    }
  }, [current_index]);

  useEffect(() => {
    const interval = setInterval(() => {
      set_current_index((prev) =>
        prev === slides.length - 1 ? slides.length - slides.length : prev + 1
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex gap-6 text-white relative">
      <div className="bg-txt min-w-[30%] p-12 rounded-2xl flex flex-col items-center justify-center gap-12 max-xl:items-center  max-xl:gap-8 max-lg:min-h-150 max-lg:min-w-full max-lg:justify-start max-lg:gap-3 max-md:min-h-140 max-md:p-5 max-sm:min-h-100 max-sm:gap-2">
        <div className="flex flex-col gap-3 items-center">
          <span className="font-ms-madi text-2xl max-lg:text-4xl max-md:text-2xl max-sm:text-xl">
            ErickCoffee
          </span>
          <h1 className="font-morabba-bold text-6xl max-2xl:text-4xl relative flex max-lg:text-6xl max-md:text-4xl max-sm:text-3xl">
            <span className="z-10">اریک کافه</span>
            <ImLeaf className="text-green-600 text-4xl rotate-y-180 absolute -left-5 -top-1 max-2xl:-left-3.5 max-2xl:text-2xl" />
          </h1>
        </div>
        <p className="text-secondary text-lg text-nowrap max-2xl:text-base max-xl:text-sm max-lg:text-lg max-md:text-base max-sm:text-sm">
          کامل ترین تجهیزات کافه و رستوران در ایران
        </p>
        <a
          href="#"
          className="flex items-center gap-16 bg-white-20 w-max py-3 px-5 rounded-full max-xl:gap-8 max-lg:hidden "
        >
          <span className="">مشاهده محصولات</span>
          <FaArrowLeftLong className="text-xl max-xl:text-base" />
        </a>
      </div>
      <div className="min-h-120 max-xl:min-h-100 min-w-[70%] rounded-2xl overflow-hidden max-lg:absolute max-lg:min-h-max  max-lg:bottom-15 max-lg:min-w-[30%] max-sm:bottom-5">
        <div className="h-full max-lg:w-[90%] max-lg:overflow-hidden max-lg:rounded-2xl mx-auto ">
          <div
            className="flex h-full max-lg:min-h-80 max-sm:min-h-60 transition-transform duration-500 linear "
            ref={slider_ref}
          >
            {slides.map((slide) => (
              <Link to={slide.route} className="min-w-full" key={slide.id}>
              {slide.img_element}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 left-125 max-2xl:left-88 max-xl:left-85  max-xl:-translate-1/2 max-lg:left-1/2 flex gap-2 max-md:bottom-5 max-sm:hidden">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`header_main_circles ${
                index === current_index ? "circle_active" : "circle_inactive"
              }`}
              onClick={() => go_to_slide(index)}
            />
          ))}
        </div>
      </div>

      <Button
        className="text-primary cursor-default right-122  top-1/2  -translate-y-1/2 absolute text-4xl max-2xl:right-103 max-lg:top-[63%] max-lg:right-12  
      max-xl:right-82 max-md:right-8 max-md:top-[60%] max-sm:bottom-70 max-sm:right-5"
        onClick={() => prev_slide()}
      >
        <BsChevronRight />
      </Button>
      <Button
        className="text-primary cursor-default -left-6 top-1/2 -translate-y-1/2 absolute text-4xl   max-lg:top-[63%] max-lg:left-12 max-md:left-8 max-md:top-[60%] max-sm:bottom-70 max-sm:left-5"
        onClick={() => next_slide()}
      >
        <BsChevronLeft />
      </Button>
    </div>
  );
};

export default HeaderMainContent;
