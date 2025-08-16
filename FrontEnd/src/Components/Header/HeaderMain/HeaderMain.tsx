import HeaderMainContent from "./HeaderMainContent/HeaderMainContent";
import NavigationMenu from "../../NavigationMenu/NavigationMenu";

const HeaderMain = () => {
  return (
    <section className="flex flex-col gap-12 max-md:gap-4">
      <NavigationMenu />
      <HeaderMainContent />
    </section>
  );
};

export default HeaderMain;
