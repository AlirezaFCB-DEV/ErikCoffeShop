import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
  return (
    <header className="flex flex-col gap-4 bg-[#FFF8F5] pt-4">
      <div className="container m-auto">
        <HeaderTop></HeaderTop>
        <section></section>
        <section></section>
      </div>
    </header>
  );
};

export default Header;
