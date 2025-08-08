import Cart_Product_Properties from "./Cart_Product_Properties/Cart_Product_Properties";
import Cart_Product_Title from "./Cart_Product_Title/Cart_Product_Title";
import Cart_Product_Counter from "./Cart_Product_Counter/Cart_Product_Counter";
import Cart_Product_Image from "./Cart_Product_Image/Cart_Product_Image";

const Cart_Product = () => {
  return (
    <div className="cart_product">
      <Cart_Product_Image />
      <div className="flex flex-3  flex-col justify-between items-start max-xl:gap-5 max-lg:gap-3 max-md:flex-1">
        <Cart_Product_Title />

        <Cart_Product_Properties />
        <Cart_Product_Counter />
      </div>
    </div>
  );
};

export default Cart_Product;
