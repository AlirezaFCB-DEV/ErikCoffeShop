import Nav_List from "../Nav_List/Nav_List";
import Nav_Logo from "../Nav_Logo/Nav_Logo";

const NavigationMenu = () => {
  return (
    <nav className="w-full flex justify-between pl-4 pr-15 h-17 rounded-full bg-txt text-white max-xl:text-sm max-lg:pr-8 relative max-md:pr-4 max-sm:hidden">
      <Nav_List />
      <div className="h-full flex items-center">
        <Nav_Logo />
      </div>
    </nav>
  );
};

export default NavigationMenu;
