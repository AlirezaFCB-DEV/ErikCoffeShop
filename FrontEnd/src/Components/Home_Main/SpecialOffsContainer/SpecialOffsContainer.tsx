import { Back } from "../../Back/Back";
import type { iconsType } from "../../Back/BackIconsComp/Icons.types";
import SpecialOffs from "./SpecialOffs/SpecialOffs";

const SpecialOffsContainer = () => {
  const icons: iconsType[] = [
    { id: crypto.randomUUID(), src: "/images/BackIcons/icon1.svg" },
    { id: crypto.randomUUID(), src: "/images/BackIcons/icon2.svg" },
    { id: crypto.randomUUID(), src: "/images/BackIcons/icon3.svg" },
  ];

  return (
    <section className="relative ">
      <Back
        title="تخفیفات ویژه"
        sizeClass="special-offs-back"
        iconsImgs={icons}
      ></Back>

      <SpecialOffs />
    </section>
  );
};

export default SpecialOffsContainer;
