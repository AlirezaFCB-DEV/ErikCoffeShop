import { IoHome } from "react-icons/io5";
import HeaderTop from "../../Header/HeaderTop/HeaderTop";
import NavigationMenu from "../../NavigationMenu/NavigationMenu";

const Cart_Header = () => {
  return (
    <header className="flex flex-col gap-8 relative">
      <HeaderTop leftIconRoute="/">
        <IoHome className="header-top-icon" />
      </HeaderTop>
      <NavigationMenu />
    </header>
  );
};

export default Cart_Header;
