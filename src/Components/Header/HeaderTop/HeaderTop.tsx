import { IoCart } from "react-icons/io5";

const HeaderTop = () => {
  return (
    <section className="flex justify-between items-center">
      <div className="flex flex-row-reverse justify-center items-center gap-2">
        <div className="bg-secondary p-3 rounded-full">
          <img src="/images/coffee.svg" alt="image" className="size-4.5" />
        </div>
        <div className="text-left leading-4.5">
          <h2 className="font-iran-yekan-bold text-primary text-lg">-۰۲۱</h2>
          <span className="font-iran-yekan">۱۲۳۲۳۲۴۳۴</span>
        </div>
      </div>
      <div>
        <a href="#">
          <img src="/images/image 1.svg" alt="" />
        </a>
      </div>
      <div className="flex items-center gap-3.5">
        <a href="#" className="group">
          <button className="transition-colors duration-200 group-hover:border-primary cursor-pointer py-2 pb-3 px-5 rounded-full flex justify-center items-center border-2">
            <span className="transition-colors duration-200 group-hover:text-primary">
              ورود/ثبت نام
            </span>
          </button>
        </a>
        <a href="#" className="group">
          <button className="transition-colors cursor-pointer bg-primary p-2.5 border-2 border-primary rounded-full group-hover:bg-white">
            <IoCart className="transition-colors text-2xl text-white group-hover:text-primary"></IoCart>
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeaderTop;
