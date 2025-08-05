import BackIconsComp from "./BackIconsComp/BackIconsComp";
import type { iconsType } from "./BackIconsComp/Icons.types";

interface BackCompProps {
  sizeClass: string;
  title: string;
  iconsImgs: iconsType[];
}

export const Back = ({ sizeClass, iconsImgs, title }: BackCompProps) => {
  const iconsReversed = [...iconsImgs].reverse();

  return (
    <div
      className={`mx-auto ${sizeClass} bg-txt rounded-4xl flex justify-between px-16 py-14`}
    >
      <div className="parent-icons-parent">
        <div className="icons-parent">
          <BackIconsComp icons={iconsImgs} />
        </div>
        <div className="icons-parent">
          <BackIconsComp icons={iconsImgs} />
        </div>
      </div>
      <h2 className="flex items-start text-white font-morabba-bold text-3xl text-nowrap">
        <span>{title}</span>
      </h2>
      <div className="parent-icons-parent">
        <div className="icons-parent">
          <BackIconsComp icons={iconsReversed} />
        </div>
        <div className="icons-parent">
          <BackIconsComp icons={iconsReversed} />
        </div>
      </div>
    </div>
  );
};
