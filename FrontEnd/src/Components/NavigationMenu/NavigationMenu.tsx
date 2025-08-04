import { FaInstagram } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Drop_Down from "./Drop_Down/Drop_Down";

const NavigationMenu = () => {
  return (
    <nav className="w-full flex justify-between pl-4 pr-15 h-17 rounded-full bg-txt text-white max-[630px]:hidden relative">
      <ul className="flex gap-10">
        <li className="nav_menu_items">
          <Link to="/" className="flex items-center gap-1">
            <RiCircleFill className="text-[10px]" />
            <span>صفحه اصلی</span>
          </Link>
        </li>
        <li className="nav_menu_items gap-0.5 group">
          لیست محصولات
          <IoIosArrowDown className="rotate-180 group-hover:rotate-0 transition-all duration-300"></IoIosArrowDown>
          <Drop_Down />
        </li>
        <li className="nav_menu_items">
          <Link to="/tutorials">آموزش ها</Link>
        </li>
        <li className="nav_menu_items">
          <Link to="/about">درباره</Link>
        </li>
        <li className="nav_menu_items">
          <Link to="/contact">تماس باما</Link>
        </li>
      </ul>
      <div className="h-full flex items-center">
        <div className="flex bg-white-20 p-2.5 rounded-full items-center gap-1">
          <span className="text-sm mt-0.5">Erick.Cafe</span>
          <FaInstagram className="text-2xl" />
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
