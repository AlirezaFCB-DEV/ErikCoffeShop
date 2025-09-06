import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

const Cart_Summary = () => {
  return (
    <div className="bg-[#3d261d] text-white flex-1 sticky top-5 p-10 rounded-tl-4xl rounded-br-4xl flex flex-col gap-6 overflow-hidden max-xl:flex-2 max-md:w-full max-md:gap-12 max-sm:gap-8">
      <div className="text-center relative">
        <TiShoppingCart className="w-full text-3xl" />
        <h2 className="font-morabba-bold text-2xl">سبد خرید شما</h2>
        <div className="bg-stroke w-full h-1 rounded-2xl absolute -bottom-2.5 "></div>
      </div>
      <div className="flex flex-col gap-4 font-morabba text-xl max-2xl:text-lg max-lg:text-sm max-md:text-xl max-md:gap-8 max-sm:text-base max-sm:gap-4">
        <div className="flex justify-between items-center">
          <h4 >قیمت کالا ها (۲کالا)</h4>
          <span>تومان ۱۹۹،۰۰۰ </span>
        </div>
        <div className="flex justify-between items-center">
          <h4>قیمت کالا ها (۲کالا)</h4>
          <span>تومان ۱۹۹،۰۰۰ </span>
        </div>
        <div className="flex justify-between items-center">
          <h4>قیمت کالا ها (۲کالا)</h4>
          <span>تومان ۱۹۹،۰۰۰ </span>
        </div>
      </div>

      <Link
        to="shipping"
        className="w-full text-center p-2.5 bg-secondary rounded-tl-2xl rounded-br-2xl hover:bg-primary transition-colors group"
      >
        <span className="text-xl text-primary font-morabba-bold transition-colors group-hover:text-secondary ">
          ادامه خرید
        </span>
      </Link>

      <div className="shipping_circles -top-6 left-1/2 right-1/2 translate-x-1/2"></div>
      <div className="shipping_circles left-1/2 right-1/2 translate-x-1/2 -bottom-6"></div>
      <div className="shipping_circles top-1/2 bottom-1/2 -translate-y-1/2 -left-6"></div>
      <div className="shipping_circles  -right-6 -translate-y-1/2  bottom-1/2 top-1/2"></div>
    </div>
  );
};

export default Cart_Summary;
