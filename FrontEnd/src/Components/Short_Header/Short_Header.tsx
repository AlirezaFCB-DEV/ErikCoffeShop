import { IoHome } from "react-icons/io5";
import HeaderTop from "../Header/HeaderTop/HeaderTop";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

const Short_Header = () => {
  return (
    <header className="flex flex-col gap-8 relative mt-4">
      <HeaderTop leftIconRoute="/">
        <IoHome className="header-top-icon" />
      </HeaderTop>
      <NavigationMenu />
    </header>
  );
};

export default Short_Header;
