import Footer from "../../Components/Footer/Footer";
import Cart_Header from "../../Components/Cart/Cart_Header/Cart_Header";
import Cart_Main from "../../Components/Cart/Cart_Main/Cart_Main";

const Cart = () => {
  return (
    <>
      <div className="container flex flex-col gap-8 ">
        <Cart_Header />
        <Cart_Main />
      </div>
      <Footer />
    </>
  );
};

export default Cart;
