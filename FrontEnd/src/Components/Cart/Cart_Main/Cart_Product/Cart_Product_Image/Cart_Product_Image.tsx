import Off_Percent from "../../../../Off_Percent/Off_Percent";

const Cart_Product_Image = () => {
  return (
    <div className=" flex flex-1/8 max-xl:flex-1/3 max-sm:flex-2 items-center justify-center relative rounded-xl border-stroke border-2">
      <Off_Percent percent={20} />
      <img
        src="/images/Products/product1.png"
        className="w-full max-h-90 max-xl:w-50 max-xl:h-70 max-lg:h-50 max-md:h-70 max-sm:h-40"
        alt="محصول"
      />
    </div>
  );
};

export default Cart_Product_Image;
