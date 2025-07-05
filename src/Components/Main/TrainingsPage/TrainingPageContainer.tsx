import { Back } from "../../Back/Back";
import type { iconsType } from "../../Back/BackIconsComp/Icons.types";
import TrainingPageProducts from "./TrainingPageProducts/TrainingPageProducts";

const TrainingPageContainer = () => {
  const icons: iconsType[] = [
    { id: crypto.randomUUID(), src: "/images/BackIcons/icon1.svg" },
    { id: crypto.randomUUID(), src: "/images/BackIcons/icon2.svg" },
    { id: crypto.randomUUID(), src: "/images/BackIcons/icon3.svg" },
  ];

  return (
    <section className="relative">
      <Back
        title="آموزش های اریک کافه"
        sizeClass="training-page"
        iconsImgs={icons}
        
      ></Back>

      <TrainingPageProducts />
    </section>
  );
};

export default TrainingPageContainer;
