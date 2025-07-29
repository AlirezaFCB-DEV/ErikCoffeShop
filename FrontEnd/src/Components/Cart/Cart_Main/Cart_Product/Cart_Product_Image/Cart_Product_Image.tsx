import Off_Percent from "../../../../Off_Percent/Off_Percent";

const Cart_Product_Image = () => {
  return (
    <div className=" flex flex-1/5 justify-center relative rounded-xl border-stroke border-2">
      <Off_Percent percent={20} />
      <img
        src="/images/Products/product1.png"
        className="w-full max-h-90"
        alt="محصول"
      />
    </div>
  );
};

export default Cart_Product_Image;
