import HeaderTop from "../Header/HeaderTop/HeaderTop";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

const Short_Header = () => {
  return (
    <header className="flex flex-col gap-8 relative mt-4">
      <HeaderTop>
      </HeaderTop>
      <NavigationMenu />
    </header>
  );
};

export default Short_Header;
