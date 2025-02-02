import { useEffect, useState } from "react"

/* eslint-disable react-hooks/rules-of-hooks */

/*eslint-disable react-hooks/exhaustive-deps*/ 

export const screenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize)
    };
  }, []);

  return screenSize
}