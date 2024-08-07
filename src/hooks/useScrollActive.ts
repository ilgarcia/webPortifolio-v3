import { useState, useEffect, RefObject } from "react";

export default function useScrollActive(ref: RefObject<HTMLElement>) {
  const [state, setState] = useState(false);

  useEffect(() => {
    const scrollActive = () => {
      const mouseScrollY = window.scrollY;

      const sectionHeight = ref.current?.offsetHeight;
      const sectionTop = ref.current?.offsetTop! - 100;

      if (
        mouseScrollY > sectionTop &&
        mouseScrollY <= sectionTop + (sectionHeight as number)
      ) {
        setState(true);
      } else {
        setState(false);
      }
    };
    scrollActive();
    window.addEventListener("scroll", scrollActive);

    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, [ref]);

  return state;
}
