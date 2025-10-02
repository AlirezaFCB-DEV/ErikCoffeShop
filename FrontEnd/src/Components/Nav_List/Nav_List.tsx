import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import Drop_Down from "../NavigationMenu/Drop_Down/Drop_Down";
import { useEffect, useState } from "react";
import type list_template_props from "../../Types/List_Template_Props.type";

interface Nav_Menu_Props {
  def_temp: list_template_props[];
}

const Nav_List = ({ def_temp }: Nav_Menu_Props) => {
  const [templates, set_tmps] = useState<list_template_props[]>(def_temp ?? []);

  const location = useLocation();

  useEffect(() => {
    const current_path = location.pathname.split("/")[1];

    set_tmps((prev) =>
      prev.map((tmp) => ({ ...tmp, active: tmp.route === `/${current_path}` }))
    );
  }, [location.pathname]);

  return (
    <ul className="flex gap-10 select-none max-lg:gap-6 max-md:gap-4 max-sm:flex-col max-sm:gap-12 items-center">
      {templates.length > 0 &&
        templates.map((tmp) => (
          <li
            className={`nav_menu_items ${
              tmp.active ? "nav_active_item" : "nav_inactive_item"
            }  ${tmp.title === "لیست محصولات" && " gap-0.5 group"}`}
            key={tmp.id}
          >
            <Link to={tmp.route} className="link">
              {tmp.title}
            </Link>
            {tmp.title === "لیست محصولات" && (
              <>
                <IoIosArrowDown className="rotate-180 group-hover:rotate-0 transition-all duration-300 max-md:hidden"></IoIosArrowDown>
                <Drop_Down />
              </>
            )}
          </li>
        ))}
    </ul>
  );
};

export default Nav_List;
