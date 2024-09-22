import { useEffect, useRef } from "react";

import c1 from "../assets/asset 3.png";
import c2 from "../assets/asset 4.png";
import c3 from "../assets/asset 5.png";
import c4 from "../assets/asset 6.png";
import c5 from "../assets/asset 7.png";
import c6 from "../assets/asset 8.png";
import c7 from "../assets/asset 9.png";
import c8 from "../assets/asset 10.png";
import c9 from "../assets/asset 11.png";
import c10 from "../assets/asset 12.png";
import c11 from "../assets/asset 13.png";
import c12 from "../assets/asset 14.png";
import c13 from "../assets/asset 15.png";
import c14 from "../assets/asset 16.png";
import c15 from "../assets/asset 17.png";
import c16 from "../assets/asset 18.png";
import c17 from "../assets/asset 19.png";
import c18 from "../assets/asset 20.png";
import c19 from "../assets/asset 21.png";
import c20 from "../assets/asset 22.png";
import c21 from "../assets/asset 23.png";
import c22 from "../assets/asset 24.png";
import c23 from "../assets/asset 25.png";
import c24 from "../assets/asset 26.png";

const ScrollEffect = () => {
  const initialTranslateLTR = -48 * 4;
  const initialTranslateRTL = 36 * 4;

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useEffect(() => {
    const setupIntersectionObserver = (el, isLTR, speed) => {
      const interCallBack = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
          document.addEventListener("scroll", scrollHandler);
        } else {
          document.removeEventListener("scroll", scrollHandler);
        }
      };

      const intersectionObserver = new IntersectionObserver(interCallBack);
      intersectionObserver.observe(el);

      const scrollHandler = () => {
        const translateX =
          (window.innerHeight - el.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if (isLTR) {
          totalTranslate = translateX + initialTranslateLTR;
        } else {
          totalTranslate = -(translateX + initialTranslateRTL);
        }

        el.style.transform = `translateX(${totalTranslate}px)`;
      };
    };

    if (line1Ref.current)
      setupIntersectionObserver(line1Ref.current, true, 0.15);
    if (line2Ref.current)
      setupIntersectionObserver(line2Ref.current, false, 0.15);
    if (line3Ref.current)
      setupIntersectionObserver(line3Ref.current, true, 0.15);
  }, []);

  return (
    <div id="line-group" className="flex flex-col gap-4">
      <div
        id="line1"
        ref={line1Ref}
        className="flex gap-4 w-screen -translate-x-48 transition-transform ease-linear"
      >
        <ImageName imgName={c1} />
        <ImageName imgName={c2} />
        <ImageName imgName={c3} />
        <ImageName imgName={c4} />
        <ImageName imgName={c5} />
        <ImageName imgName={c6} />
        <ImageName imgName={c7} />
        <ImageName imgName={c8} />
        <ImageName imgName={c9} />
        <ImageName imgName={c10} />
        <ImageName imgName={c11} />
        <ImageName imgName={c12} />
        <ImageName imgName={c13} />
        <ImageName imgName={c14} />
        <ImageName imgName={c15} />
        <ImageName imgName={c16} />
        <ImageName imgName={c17} />
        <ImageName imgName={c18} />
        <ImageName imgName={c19} />
        <ImageName imgName={c20} />
        <ImageName imgName={c21} />
        <ImageName imgName={c22} />
        <ImageName imgName={c23} />
        <ImageName imgName={c24} />
      </div>

      <div
        id="line2"
        ref={line2Ref}
        className="flex gap-4 w-screen -translate-x-36 transition-transform ease-linear"
      >
        <ImageName imgName={c13} />
        <ImageName imgName={c14} />
        <ImageName imgName={c15} />
        <ImageName imgName={c16} />
        <ImageName imgName={c17} />
        <ImageName imgName={c18} />
        <ImageName imgName={c19} />
        <ImageName imgName={c20} />
        <ImageName imgName={c21} />
        <ImageName imgName={c22} />
        <ImageName imgName={c23} />
        <ImageName imgName={c24} />
        <ImageName imgName={c1} />
        <ImageName imgName={c2} />
        <ImageName imgName={c3} />
        <ImageName imgName={c4} />
        <ImageName imgName={c5} />
        <ImageName imgName={c6} />
        <ImageName imgName={c13} />
        <ImageName imgName={c14} />
        <ImageName imgName={c15} />
      </div>

      <div
        id="line3"
        ref={line3Ref}
        className="flex md:hidden gap-4 w-screen -translate-x-48 transition-transform ease-linear"
      >
        <ImageName imgName={c12} />
        <ImageName imgName={c13} />
        <ImageName imgName={c14} />
        <ImageName imgName={c1} />
        <ImageName imgName={c2} />
        <ImageName imgName={c3} />
        <ImageName imgName={c9} />
        <ImageName imgName={c10} />
        <ImageName imgName={c11} />
        <ImageName imgName={c21} />
        <ImageName imgName={c22} />
        <ImageName imgName={c23} />
      </div>
    </div>
  );
};

export default ScrollEffect;

function ImageName({ imgName }) {
  return (
    <div className="flex flex-col gap-2 min-w-24 min-h-24 justify-center items-center bg-white rounded-xl  border border-gray-300 md:w-32 md:h-32">
      <img src={imgName} className="w-12 h-12 md:w-16 md:h-16" alt="" />
      <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
    </div>
  );
}
