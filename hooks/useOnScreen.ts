import { RefObject, useEffect, useState } from "react";

export const useOnScreen = (
  ref: RefObject<Element>,
  rootMargin = "0px"
) => {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, rootMargin]);
  return isIntersecting;
};
