import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import Nav_List from "../../Nav_List/Nav_List";
import { useState } from "react";
import Nav_Title from "../../Nav_Title/Nav_Title";
import { FaInstagram, FaUser } from "react-icons/fa";
import Mobile_Side_Menu from "../../Moblie_Side_Menu/Moblie_Side_Menu";
import { nav_menu_items } from "../../../templates/Nav_Temp_Content/Nav_Temp_Content";
import { IoCart, IoHome } from "react-icons/io5";
import Contact_Us_Phone from "../../Contact_Us_Phone/Contact_Us_Phone";
import Logo from "../../Logo/Logo";

const HeaderTop = () => {
  const [is_active_mobile, set_is_active_mobile] = useState<
    "off" | "left_nav" | "right_nav"
  >("off");

  const navigate = useNavigate();
  // const [is_login, set_is_login] = useState<boolean>(false);
  const is_login = false;
  const user_logged_handler = () => {
    is_login
      ? set_is_active_mobile("left_nav")
      : navigate("/login_or_register");
  };

  const current_route = useLocation().pathname;

  return (
    <section className="flex justify-between items-center ">
      <Contact_Us_Phone />
      <Button
        className={`hidden bg-primary size-12 max-sm:flex items-center flex-col justify-center gap-1 rounded-full`}
        onClick={() => set_is_active_mobile("right_nav")}
      >
        <span className="mobile_menu_lines"></span>
        <span className="mobile_menu_lines"></span>
        <span className="mobile_menu_lines"></span>
      </Button>

      <Mobile_Side_Menu
        dir="r"
        title={
          <Nav_Title route="https://instagram.com/erick.cafeee">
            <div className="flex bg-white-20 p-2.5 rounded-full items-center gap-1">
              <span className="text-sm mt-0.5 max-sm:text-xl">
                Erick.Cafeee
              </span>
              <FaInstagram className="text-2xl max-xl:text-xl max-sm:text-2xl" />
            </div>
          </Nav_Title>
        }
        is_active={is_active_mobile}
        set_is_active={set_is_active_mobile}
      >
        <Nav_List def_temp={nav_menu_items}></Nav_List>
      </Mobile_Side_Menu>
      <Logo />
      <div className="flex items-center gap-0.5">
        <Link
          to="/login_or_register"
          className="transition-colors duration-200 group hover:border-primary cursor-pointer py-2 pb-3 px-5 rounded-full flex justify-center items-center border-2 max-sm:hidden"
        >
          <span className="transition-colors duration-200 group-hover:text-primary">
            ورود/ثبت نام
          </span>
        </Link>
        <Link
          to={current_route === "/cart" ? "/home" : "/cart"}
          className="group"
        >
          <Button className="transition-colors cursor-pointer bg-primary p-2.5 border-2 border-primary rounded-full group-hover:bg-white max-sm:hidden">
            {current_route === "/cart" ? (
              <IoHome className="header-top-icon" />
            ) : (
              <IoCart className="header-top-icon"></IoCart>
            )}
          </Button>
        </Link>
        <Button
          className="hidden bg-primary p-2.5 border-2 border-primary rounded-full max-sm:flex"
          onClick={() => user_logged_handler()}
        >
          <FaUser className="header-top-icon" />
        </Button>
        <Mobile_Side_Menu
          dir="l"
          title={
            <Nav_Title route="https://instagram.com/erick.cafeee">
              <div className="flex bg-white-20 p-2.5 rounded-full items-center gap-1">
                <span className="text-sm mt-0.5 max-sm:text-xl">
                  Erick.Cafeee
                </span>
                <FaInstagram className="text-2xl max-xl:text-xl max-sm:text-2xl" />
              </div>
            </Nav_Title>
          }
          is_active={is_active_mobile}
          set_is_active={set_is_active_mobile}
        >
          <Nav_List def_temp={nav_menu_items}></Nav_List>
        </Mobile_Side_Menu>
      </div>
    </section>
  );
};

export default HeaderTop;
