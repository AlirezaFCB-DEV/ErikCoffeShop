import { FaArrowLeftLong } from "react-icons/fa6";
import { ImLeaf } from "react-icons/im";
// import Button from "../../../Button/Button";
// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// import { Link } from "react-router-dom";
import Slider from "./Slider/Slider";

const HeaderMainContent = () => {
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

      <div className="min-h-120 max-xl:min-h-100 min-w-[70%]  overflow-hidden rounded-2xl max-lg:absolute max-lg:min-h-max  max-lg:bottom-15 max-lg:min-w-[30%] max-sm:bottom-5">
        <Slider></Slider>
      </div>

      {/* <Button
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
      </Button> */}
    </div>
  );
};

export default HeaderMainContent;
