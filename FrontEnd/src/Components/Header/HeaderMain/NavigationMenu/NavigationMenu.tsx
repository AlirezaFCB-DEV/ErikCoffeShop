import { FaInstagram } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <nav className="flex justify-between pl-4 pr-15 min-h-17 items-center rounded-full bg-txt text-white max-[630px]:hidden">
      <ul className="flex items-center gap-10">
        <li>
          <Link to="/" className="flex items-center gap-1">
            <RiCircleFill className="text-[10px]" />
            <span className="">صفحه اصلی</span>
          </Link>
        </li>
        <li className="flex items-center gap-0.5">
          لیست محصولات
          <IoIosArrowDown></IoIosArrowDown>
          <ul className="hidden">

          </ul>
        </li>
        <li>
          <Link to="tutorials">آموزش ها</Link>
        </li>
        <li>
          <Link to="about">درباره</Link>
        </li>
        <li>
          <Link to="contact">تماس باما</Link>
        </li>
      </ul>
      <div className="flex bg-white-20 p-2.5 rounded-full items-center gap-1">
        <span className="text-sm mt-0.5">Erick.Cafe</span>
        <FaInstagram className="text-2xl" />
      </div>
    </nav>
  );
};

export default NavigationMenu;
