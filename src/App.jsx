import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import StepFeatures from "./components/StepFeatures.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StepFeatures />
      </main>
    </>
  );
}

/*
// For later
//////////////////////////////
// Scroll Animation

const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

// Elements
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

// Scroll animation effect
function setupIntersectionObserver(el, isLTR, speed) {
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

  function scrollHandler() {
    const translateX =
      (window.innerHeight - el.getBoundingClientRect().top) * speed;

    let totalTranslate = 0;
    if (isLTR) {
      totalTranslate = translateX + initialTranslateLTR;
    } else {
      totalTranslate = -(translateX + initialTranslateRTL);
    }

    el.style.transform = `translateX(${totalTranslate}px)`;
  }
}
setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
*/
