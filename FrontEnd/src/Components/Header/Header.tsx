import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderMain from "./HeaderMain/HeaderMain";
import HeaderTop from "./HeaderTop/HeaderTop";
import { IoCart } from "react-icons/io5";

const Header = () => {
  return (
    <header className=" bg-[#FFF8F5] pt-4 min-h-182 relative w-full overflow-hidden  max-[630px]:min-h-202 max-[630px]:justify-items-stretch">
      <img
        src="/images/leaf.svg"
        alt="leaf"
        className="absolute left-0 bottom-0 opacity-8"
      />
      <div className="container m-auto flex flex-col gap-8 relative ">
        <HeaderTop leftIconRoute="/cart">
          <IoCart className="header-top-icon"></IoCart>
        </HeaderTop>
        <HeaderMain />
      </div>
      <div className="absolute bottom-0 left-0 w-fit overflow-hidden z-50 ">
        <HeaderBottom />
      </div>
    </header>
  );
};

export default Header;
