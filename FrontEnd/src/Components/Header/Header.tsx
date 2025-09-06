import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderMain from "./HeaderMain/HeaderMain";
import HeaderTop from "./HeaderTop/HeaderTop";
import { IoCart } from "react-icons/io5";

const Header = () => {
  return (
    <header className=" bg-[#FFF8F5] pt-4 min-h-200 relative w-full overflow-hidden max-xl:min-h-180 max-lg:min-h-230 max-md:min-h-200 max-sm:min-h-150 ">
      <img
        src="/images/leaf.svg"
        alt="leaf"
        className="absolute left-0 bottom-0 opacity-8 max-xl:w-20"
      />
      <div className="container flex flex-col gap-8 relative max-md:gap-4 max-sm:gap-10">
        <HeaderTop leftIconRoute="/cart">
          <IoCart className="header-top-icon"></IoCart>
        </HeaderTop>
        <HeaderMain />
      </div>
      <div className="absolute bottom-0 left-0 w-fit overflow-hidden z-30 ">
        <HeaderBottom />
      </div>
    </header>
  );
};

export default Header;
