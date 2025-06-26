import HeaderMain from "./HeaderMain/HeaderMain";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
  return (
    <header className=" bg-[#FFF8F5] pt-4 min-h-166 relative">
      <img src="/images/leaf.svg" alt="leaf" className="absolute left-0 bottom-0 opacity-8" />
      <div className="container m-auto flex flex-col gap-8">
        <HeaderTop></HeaderTop>
        <HeaderMain></HeaderMain>
        <section></section>
      </div>
    </header>
  );
};

export default Header;
