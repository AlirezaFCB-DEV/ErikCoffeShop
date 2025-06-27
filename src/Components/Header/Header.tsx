import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderMain from "./HeaderMain/HeaderMain";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
  return (
    <header className=" bg-[#FFF8F5] pt-4 min-h-165 relative w-full overflow-hidden">
      <img
        src="/images/leaf.svg"
        alt="leaf"
        className="absolute left-0 bottom-0 opacity-8"
      />
      <div className="container m-auto flex flex-col gap-8 relative">
        <HeaderTop />
        <HeaderMain />
      </div>
      <div className="absolute bottom-0 left-0 w-fit overflow-hidden z-50">
        <HeaderBottom />
      </div>
    </header>
  );
};

export default Header;
