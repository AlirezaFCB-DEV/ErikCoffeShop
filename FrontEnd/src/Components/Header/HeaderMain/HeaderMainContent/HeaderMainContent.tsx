import { FaArrowLeftLong } from "react-icons/fa6";
import { ImLeaf } from "react-icons/im";

const HeaderMainContent = () => {
  return (
    <div className="flex gap-6 text-white pb-20 ">
      <div className="bg-txt flex-1 p-12 rounded-2xl flex flex-col justify-center gap-8 max-xl:items-center max-xl:px-8 max-xl:gap-12">
        <div className="flex flex-col gap-3 max-xl:items-center">
          <span className="font-ms-madi text-2xl">
            ErickCoffee
          </span>
          <h1 className="font-morabba-bold text-6xl max-xl:text-4xl relative flex max-[630px]:text-3xl">
            <span className="z-10">اریک کافه</span>
            <ImLeaf className="text-green-600 text-4xl rotate-y-180 absolute left-8 max-xl:-left-3.5 max-xl:text-2xl" />
          </h1>
        </div>
        <p className="text-secondary text-lg text-nowrap max-xl:text-sm ">
          کامل ترین تجهیزات کافه و رستوران در ایران
        </p>
        <a
          href="#"
          className="flex items-center gap-16 bg-white-20 w-max py-3 px-5 rounded-full max-xl:gap-8 "
        >
          <span className="">مشاهده محصولات</span>
          <FaArrowLeftLong className="text-xl max-xl:text-base" />
        </a>
      </div>
      <div className="bg-[#847669] opacity-90 p-20 flex-3 flex items-center relative min-h-100 rounded-2xl overflow-hidden max-xl:">
        <div className="flex flex-col  gap-8  ">
          <h2 className="font-morabba-bold text-5xl max-xl:text-4xl">
            کـــافــــه از تــــو
          </h2>
          <span className="text-2xl  max-xl:text-xl">تجهیزات باما</span>
          <a href="#">
            <FaArrowLeftLong className="text-2xl" />
          </a>
        </div>
        <img
          src="/images/hands.png"
          alt="hands"
          className="absolute left-0 bottom-0 z-10"
        />
        <div className="absolute bg-[#E8DFD6] z-0 blur-3xl opacity-60 -left-60 top-0.5 w-237.75 h-194.75 rounded-full"></div>
      </div>
    </div>
  );
};

export default HeaderMainContent;
