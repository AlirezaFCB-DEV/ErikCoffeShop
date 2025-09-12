import { useEffect, useState } from "react";

const responsive_count_slides = (def_count: number) => {
  const [slides_count, set_slides_count] = useState<number>(0);

  useEffect(() => {
    const handle_resize = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        set_slides_count(def_count);
      } else if (width >= 1024) {
        set_slides_count(def_count - 1);
      } else if (width >= 768) {
        set_slides_count(def_count - 2);
      } else if (width >= 1) {
        set_slides_count(1);
      }
    };

    handle_resize();

    window.addEventListener("resize", handle_resize);

    return () => {
      window.removeEventListener("resize", handle_resize);
    };
  }, [def_count]);

  return slides_count;
};

export default responsive_count_slides;
