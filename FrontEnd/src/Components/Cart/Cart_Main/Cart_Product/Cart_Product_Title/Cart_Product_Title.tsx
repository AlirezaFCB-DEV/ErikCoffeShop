import { Link } from "react-router-dom";

const Cart_Product_Title = () => {
  return (
    <div className="flex flex-col gap-6 max-xl:gap-4 max-lg:gap-2">
      <Link to="products/coffee_boxillian">
        <h2 className="font-iran-yekan-bold text-2xl max-xl:text-xl max-lg:text-base max-md:text-xl max-sm:text-sm">
          دانه قهوه باکسی‌برند Boxillian
        </h2>
      </Link>
      <p className="text-sm text-sec-text max-md:text-lg max-sm:text-sm">دانه قهوه | برند‌:‌Boxillian</p>
    </div>
  );
};

export default Cart_Product_Title;
