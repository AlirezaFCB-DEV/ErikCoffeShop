import { FaInstagram } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiCircleFill } from "react-icons/ri";

const NavigationMenu = () => {
  return (
    <nav className="flex justify-between pl-4 pr-15 min-h-17 items-center rounded-full bg-txt text-white max-[630px]:hidden">
      <ul className="flex items-center gap-10">
        <li>
          <a href="#" className="flex items-center gap-1">
            <RiCircleFill className="text-[10px]" />
            <span className="">صفحه اصلی</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center gap-0.5">
            لیست محصولات
            <IoIosArrowDown></IoIosArrowDown>
          </a>
        </li>
        <li>
          <a href="#">خدمات</a>
        </li>
        <li>
          <a href="#">آموزش ها</a>
        </li>
        <li>
          <a href="#">درباره</a>
        </li>
        <li>
          <a href="#">تماس باما</a>
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
