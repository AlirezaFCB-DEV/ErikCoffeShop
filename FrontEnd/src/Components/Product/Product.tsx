import { Link } from "react-router-dom";
import Off_Percent from "../Off_Percent/Off_Percent";

export interface ProductProps {
  img: string;
  offPercent: number;
  title: string;
  subTitle: string;
  realPrice: number;
  sizeClass: string;
  route: string;
}

const Product = ({
  img,
  offPercent,
  title,
  subTitle,
  realPrice,
  sizeClass,
  route,
}: ProductProps) => {
  const new_price =
    offPercent < 100
      ? realPrice - (realPrice / 100) * offPercent
      : realPrice - (realPrice / 100) * 100;

  return (
    <Link to={route}>
      <div
        className={` relative border-stroke border-2 py-4 px-6 ${sizeClass} flex flex-col  justify-between rounded-2xl select-none hover:border-primary group transition-colors cursor-pointer min-h-100 `}
      >
        <Off_Percent percent={offPercent} />

        <div className="flex  justify-center flex-col h-full">
          <div className="flex justify-center">
            <img
              src={img}
              alt="محصول"
              className="w-[200px] h-[240px] max-xl:w-[150px] max-xl:h-[200px] object-cover max-md:w-[200px] max-md:h-[240px] max-sm:w-[150px] max-sm:h-[150px]"
            />
          </div>

          <div>
            <h3 className="font-iran-yekan-bold transition-colors group-hover:text-primary max-xl:text-base max-md:text-lg max-sm:text-base">
              {title}
            </h3>
            <span className="text-lg text-sec-text max-md:text-lg max-sm:text-base">
              {subTitle}
            </span>
          </div>
        </div>

        <div className="flex flex-col" dir="ltr">
          <span className="text-xl line-through relative w-fit blur-[1.5px]  max-md:text-xl max-sm:text-lg">
            {realPrice.toLocaleString("fa-IR")}
          </span>
          <span
            dir="ltr"
            className="text-xl text-primary  max-md:text-xl max-sm:text-lg"
          >
            {new_price.toLocaleString("fa-IR")} تومان
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
