import { FaInstagram } from "react-icons/fa";
import Nav_List from "../Nav_List/Nav_List";
import Nav_Title from "../Nav_Title/Nav_Title";
import { nav_menu_items } from "../../templates/Nav_Temp_Content/Nav_Temp_Content";

const NavigationMenu = () => {
  return (
    <nav className="w-full flex justify-between pl-4 pr-15 h-17 rounded-full bg-txt text-white max-xl:text-sm max-lg:pr-8 relative max-md:pr-4 max-sm:hidden">
      <Nav_List def_temp={nav_menu_items} />
      <div className="h-full flex items-center">
        <Nav_Title route="https://instagram.com/erick.cafeee">
          <div className="flex bg-white-20 p-2.5 rounded-full items-center gap-1">
            <span className="text-sm mt-0.5 max-sm:text-xl">Erick.Cafeee</span>
            <FaInstagram className="text-2xl max-xl:text-xl max-sm:text-2xl" />
          </div>
        </Nav_Title>
      </div>
    </nav>
  );
};

export default NavigationMenu;
