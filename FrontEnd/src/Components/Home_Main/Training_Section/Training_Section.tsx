import { Back } from "../../Back/Back";
import type { iconsType } from "../../Back/BackIconsComp/Icons.types";
import Training_Items from "./TrainingPageProducts/TrainingPageProducts";

const Training_Section = () => {
  const icons: iconsType[] = [
    { id: crypto.randomUUID(), src: "/images/BackIcons/icon6.svg" },
    { id: crypto.randomUUID(), src: "/images/BackIcons/icon4.svg" },
    { id: crypto.randomUUID(), src: "/images/BackIcons/icon5.svg" },
  ];

  return (
    <section className="relative">
      <Back
        title="آموزش های اریک کافه"
        sizeClass="training-page"
        iconsImgs={icons}
        
      ></Back>

      <Training_Items />
    </section>
  );
};

export default Training_Section;
