import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "../../../../Button/Button";

interface ProductCountBtns {
  button: React.ReactNode;
}

type CountBtnsArr = ProductCountBtns[];

const countBtns: CountBtnsArr = [
  { button: <FaMinus className="text-lg" /> },
  { button: <FaPlus className="text-lg" /> },
];

const Cart_Product_Counter = () => {
  return (
    <div className="flex gap-2 items-center ">
      <span className="text-sec-text ">مقدار:</span>
      <div className="flex flex-col items-center border-stroke border-2 w-50 relative py-2.5 px-3 rounded-xl max-lg:w-40 max-md:w-60 max-md:py-5 max-md:px-6 max-sm:py-2 max-sm:px-2 max-sm:w-30">
        <span className="text-2xl max-md:text-3xl max-sm:text-lg">۱</span>
        <div className="flex w-full justify-around">
          {countBtns.map((btn) => (
            <Button
              className="border-stroke border-2 py-1 px-3 rounded-lg cursor-pointer group hover:border-stone-700 transition-colors max-md:py-2 max-md:px-4 max-sm:px-1 max-sm:py-0.5"
              key={crypto.randomUUID()}
            >
              {btn.button}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart_Product_Counter;
