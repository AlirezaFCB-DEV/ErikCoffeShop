import { Link } from "react-router-dom";

const Cart_Product_Title = () => {
  return (
    <div className="flex flex-col gap-6">
      <Link to="products/coffee_boxillian">
        <h2 className="font-iran-yekan-bold text-2xl">
          دانه قهوه باکسی‌برند Boxillian
        </h2>
      </Link>
      <p className="text-sm text-sec-text">دانه قهوه | برند‌:‌Boxillian</p>
    </div>
  );
};

export default Cart_Product_Title;
