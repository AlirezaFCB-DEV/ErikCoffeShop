import { IoHome } from "react-icons/io5";
import HeaderTop from "../../Components/Header/HeaderTop/HeaderTop";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";

const Cart = () => {
  return (
    <>
      <div className="container mt-4 m-auto flex flex-col gap-8 relative ">
        <HeaderTop leftIconRoute="/">
          <IoHome className="header-top-icon" />
        </HeaderTop>
        <NavigationMenu />
      </div>
    </>
  );
};

export default Cart;
