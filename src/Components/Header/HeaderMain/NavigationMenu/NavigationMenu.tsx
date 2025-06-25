import { FaInstagram } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiCircleFill } from "react-icons/ri";

const NavigationMenu = () => {
  return (
    <nav className="flex justify-between pl-4.5 pr-10 min-h-17 items-center rounded-full bg-txt text-white">
      <ul className="flex items-center gap-5">
        <li>
          <a href="#" className="flex items-center gap-1">
            <RiCircleFill className="text-[10px] mt-1.5" />
            <span>صفحه اصلی</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-end  gap-0.5">
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
      <div className="flex bg-[#FFFFFF33] p-2.5 rounded-full items-center gap-0.5">
        <span className="text-sm">Erick.Cafe</span>
        <FaInstagram className="text-2xl" />
      </div>
    </nav>
  );
};

export default NavigationMenu;
