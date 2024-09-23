import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import StepFeatures from "./components/StepFeatures.jsx";
import BentoGrid from "./components/BentoGrid.jsx";
import CompaniesFeatures from "./components/CompaniesFeatures.jsx";
import CustomerStories from "./components/CustomerStories.jsx";
import Pricing from "./components/Pricing.jsx";
import Faqs from "./components/Faqs.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <StepFeatures />
        <BentoGrid />
        <CompaniesFeatures />
        <CustomerStories />
        <Pricing />
        <Faqs />
        <Footer />
      </main>
    </div>
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
const line4 = document.getElementById("line4");

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
setupIntersectionObserver(line4, true, 0.80);
*/
