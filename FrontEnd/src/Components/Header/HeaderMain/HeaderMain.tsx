import HeaderMainContent from "./HeaderMainContent/HeaderMainContent";
import NavigationMenu from "../../NavigationMenu/NavigationMenu";

const HeaderMain = () => {
  return (
    <section className="flex flex-col gap-8">
      <NavigationMenu />
      <HeaderMainContent />
    </section>
  );
};

export default HeaderMain;
