import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Drop_Down from "../NavigationMenu/Drop_Down/Drop_Down";

const Nav_List = () => {
  return (
    <ul className="flex gap-10 select-none max-lg:gap-6 max-md:gap-4 max-sm:flex-col max-sm:gap-12 ">
      <li className="nav_menu_items nav_active_item">
        <Link to="/" className="flex items-center gap-1 link">
          <span>صفحه اصلی</span>
        </Link>
      </li>
      <li className="nav_menu_items gap-0.5 group">
        <Link to="/products"className="link">لیست محصولات</Link>
        <IoIosArrowDown className="rotate-180 group-hover:rotate-0 transition-all duration-300 max-md:hidden"></IoIosArrowDown>
        <Drop_Down />
      </li>
      <li className="nav_menu_items">
        <Link to="/tutorials" className="link">آموزش ها</Link>
      </li>
      <li className="nav_menu_items">
        <Link to="/about" className="link">درباره</Link>
      </li>
      <li className="nav_menu_items">
        <Link to="/contact" className="link">تماس باما</Link>
      </li>
    </ul>
  );
};

export default Nav_List;
