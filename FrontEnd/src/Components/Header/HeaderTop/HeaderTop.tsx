import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

interface HeaderTop {
  children: React.ReactNode;
  leftIconRoute: string;
}

const HeaderTop = ({ children, leftIconRoute }: HeaderTop) => {
  return (
    <section className="flex justify-between items-center ">
      <div className="flex flex-row-reverse justify-center items-center gap-2 max-[630px]:hidden">
        <div className="bg-secondary p-3 rounded-full">
          <img src="/images/coffee.svg" alt="image" className="size-4.5" />
        </div>
        <div className="text-left leading-4.5">
          <h2 className="font-iran-yekan-bold text-primary text-lg">-۰۲۱</h2>
          <span className="font-iran-yekan">۱۲۳۲۳۲۴۳۴</span>
        </div>
      </div>
      <button className=" sm:collapse max-[630px]:block hidden  transition-colors cursor-pointer bg-secondary p-2.5  rounded-full group-hover:bg-[##28221E]">
        <IoMdMenu className="transition-colors text-2xl text-[#28221E] group-hover:text-secondary" />
      </button>
      <div>
        <Link to="/">
          <img src="/images/image 1.svg" alt="" />
        </Link>
      </div>
      <div className="flex items-center gap-3.5">
        <Link to="#" className="group max-[630px]:hidden">
          <button className="transition-colors duration-200 group-hover:border-primary cursor-pointer py-2 pb-3 px-5 rounded-full flex justify-center items-center border-2">
            <span className="transition-colors duration-200 group-hover:text-primary">
              ورود/ثبت نام
            </span>
          </button>
        </Link>
        <Link to={leftIconRoute} className="group">
          <button className="transition-colors cursor-pointer bg-primary p-2.5 border-2 border-primary rounded-full group-hover:bg-white ">
            {children}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeaderTop;
