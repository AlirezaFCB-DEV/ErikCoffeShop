import { Back } from "../../Back/Back";
import type { iconsType } from "../../Back/BackIconsComp/Icons.types";

const SpecialOffs = () => {
  const icons: iconsType[] = [
    { id: crypto.randomUUID(), src: "/images/BackIcons/icon1.svg" },
    { id: crypto.randomUUID(), src: "/images/BackIcons/icon2.svg" },
    { id: crypto.randomUUID(), src: "/images/BackIcons/icon3.svg" },
  ];

  return (
    <section className="">
      <Back
        title="تخفیفات ویژه"
        sizeClass="special-offs-back"
        iconsImgs={icons}
      ></Back>
    </section>
  );
};

export default SpecialOffs;
