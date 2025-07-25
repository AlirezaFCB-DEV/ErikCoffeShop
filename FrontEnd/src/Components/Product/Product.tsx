import Off_Percent from "../Off_Percent/Off_Percent";

export interface ProductProps {
  img: string;
  offPercent: number;
  title: string;
  subTitle: string;
  realPrice: number;
  sizeClass: string;
}

const Product = ({
  img,
  offPercent,
  title,
  subTitle,
  realPrice,
  sizeClass,
}: ProductProps) => {
  const newPrice = realPrice - (realPrice / 100) * offPercent;

  return (
    <div
      className={`relative border-stroke border-2 py-4 px-6 ${sizeClass} flex flex-col  justify-between rounded-2xl select-none hover:border-primary group transition-colors cursor-pointer`}
    >
      <Off_Percent percent={offPercent} />

      <div className="flex  justify-center flex-col h-full">
        <div className="flex justify-center">
          <img
            src={img}
            alt="محصول"
            className="w-[200px] h-[240px] object-contain "
          />
        </div>

        <div>
          <h3 className="font-iran-yekan-bold transition-colors group-hover:text-primary">
            {title}
          </h3>
          <span className="text-sm text-sec-text">{subTitle}</span>
        </div>
      </div>

      <div className="flex flex-col" dir="ltr">
        <span className="text-xl line-through relative w-fit blur-[1.5px]">
          {realPrice.toLocaleString("fa-IR")}
        </span>
        <span dir="ltr" className="text-xl text-primary">
          {newPrice.toLocaleString("fa-IR")} تومان
        </span>
      </div>
    </div>
  );
};

export default Product;
