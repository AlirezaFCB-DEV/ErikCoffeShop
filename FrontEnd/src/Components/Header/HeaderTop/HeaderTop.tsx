import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import Nav_Logo from "../../Nav_Logo/Nav_Logo";
import Nav_List from "../../Nav_List/Nav_List";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

interface HeaderTop {
  children: React.ReactNode;
  leftIconRoute: string;
}

const HeaderTop = ({ children, leftIconRoute }: HeaderTop) => {
  const [is_active_mobile, set_is_active_mobile] = useState<Boolean>(false);

  return (
    <section className="flex justify-between items-center ">
      <div className="flex flex-row-reverse justify-center items-center gap-2 max-sm:hidden ">
        <div className="bg-secondary p-3 rounded-full">
          <img src="/images/coffee.svg" alt="image" className="size-4.5" />
        </div>
        <div className="text-left leading-4.5">
          <h2 className="font-iran-yekan-bold text-primary text-lg">-۰۲۱</h2>
          <span className="font-iran-yekan">۱۲۳۲۳۲۴۳۴</span>
        </div>
      </div>
      <Button
        className={`hidden bg-primary size-12 max-sm:flex items-center flex-col justify-center gap-1 rounded-full`}
        onClick={() => set_is_active_mobile(true)}
      >
        <span className="mobile_menu_lines"></span>
        <span className="mobile_menu_lines"></span>
        <span className="mobile_menu_lines"></span>
      </Button>
      <div
        className={`${
          is_active_mobile ? "translate-x-0" : "translate-x-150"
        } hidden max-sm:flex flex-col fixed top-0 -right-0 z-40 bg-txt w-4/5 h-[110vh] text-white p-8 gap-8 transition-transform duration-500`}
      >
        <div className="flex items-center justify-center relative">
          <Nav_Logo />
          <Button onClick={() => set_is_active_mobile(false)}>
            <RxCross2 className="text-4xl -top-3 -left-3 absolute" />
          </Button>
        </div>
        <Nav_List />
      </div>
      <div>
        <Link to="/">
          <img src="/images/image 1.svg" alt="" />
        </Link>
      </div>
      <div className="flex items-center gap-0.5">
        <Link
          to="/login-register"
          className="transition-colors duration-200 group hover:border-primary cursor-pointer py-2 pb-3 px-5 rounded-full flex justify-center items-center border-2 max-sm:hidden"
        >
          <span className="transition-colors duration-200 group-hover:text-primary">
            ورود/ثبت نام
          </span>
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
