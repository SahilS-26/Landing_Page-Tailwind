import { useEffect, useRef } from "react";

export default function CompaniesFeatures() {
  const initialTranslateLTR = -48 * 4;
  const initialTranslateRTL = 36 * 4;

  const line4Ref = useRef(null);

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

    if (line4Ref.current)
      setupIntersectionObserver(line4Ref.current, true, 0.8);
  }, []);

  return (
    <div id="features-line" className="container">
      <div className="border rounded-lg p-4 justify-center overflow-hidden">
        <div
          id="line4"
          ref={line4Ref}
          className="-translate-x-96 flex gap-8 p-6"
        >
          <Item>Download Analytics</Item>
          <Item>Custom Menus</Item>
          <Item>Multi-window support</Item>
          <Item>Trays</Item>
          <Item>Download Analytics</Item>
          <Item>Launch at startup</Item>
          <Item>Deep Linking</Item>
          <Item>Offline Support</Item>
          <Item>Good Signing</Item>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Item({ children }) {
  return (
    <>
      <h3 className="text-nowrap font-semibold text-2xl leading-7 font-display">
        {children}
      </h3>
      <span>•</span>
    </>
  );
}
