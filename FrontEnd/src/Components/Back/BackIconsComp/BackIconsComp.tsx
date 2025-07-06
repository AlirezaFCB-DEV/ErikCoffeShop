import type { iconsType } from "./Icons.types";

interface BackIconsCompProps {
  icons: iconsType[];
}

const BackIconsComp = ({ icons }: BackIconsCompProps) => {
  return (
    <>
      {icons.map((icon) => (
        <img src={icon.src} key={icon.id} className="opacity-30" alt="آیکون" />
      ))}
    </>
  );
};

export default BackIconsComp;
