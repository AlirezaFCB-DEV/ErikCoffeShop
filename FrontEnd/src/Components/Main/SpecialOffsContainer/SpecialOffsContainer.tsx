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
    <section className="relative max-[630px]:my-20 max-[630px]:flex max-[630px]:flex-col max-[630px]:justify-center max-[630px]:items-center max-[630px]:text-center">
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
