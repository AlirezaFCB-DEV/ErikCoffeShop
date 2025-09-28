import Button from "../Button/Button";
import { RxCross2 } from "react-icons/rx";

interface side_menu_props {
  children: React.ReactNode;
  title: React.ReactNode;
  is_active: "off" | "right_nav" | "left_nav";
  set_is_active: (value: "off" | "right_nav" | "left_nav") => void;
  dir: "l" | "r";
}

const Mobile_Side_Menu = ({
  children,
  title,
  is_active,
  set_is_active,
  dir,
}: side_menu_props) => {
  const isVisible =
    (is_active === "right_nav" && dir === "r") ||
    (is_active === "left_nav" && dir === "l");

  return (
    <>
      <div
        className={`${
          isVisible
            ? "translate-x-0"
            : `${dir === "r" ? "translate-x-full" : "-translate-x-full"}`
        }  hidden  max-sm:flex transition-transform duration-500 w-full fixed top-0 ${
          dir === "r" ? "flex-row " : "flex-row-reverse"
        } ${dir === "r" ? "right-0" : "left-0"}
 z-40 h-[101vh]`}
      >
        <div
          className={`max-sm:flex flex-col  bg-txt   text-white p-8 gap-8 flex-3/4`}
        >
          <div className="flex  flex-col gap-8 ">
            <div className="flex items-center justify-center relative">
              {title}
              <Button onClick={() => set_is_active("off")}>
                <RxCross2
                  className={`text-4xl -top-3  ${
                    dir === "r" ? "-left-3" : "-right-3"
                  } absolute`}
                />
              </Button>
            </div>
            {children}
          </div>
        </div>

        <div className="flex-1/4" onClick={() => set_is_active("off")}></div>
      </div>
    </>
  );
};

export default Mobile_Side_Menu;
