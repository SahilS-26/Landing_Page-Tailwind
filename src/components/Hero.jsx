import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHandBackFist,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/fontawesome-free-regular";
import downArrow from "../assets/asset 2.svg";
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

export default function Hero() {
  return (
    <>
      <div
        id="hero"
        className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-trasparent"
      >
        <div
          id="hero-container"
          className="max-w-4xl mx-auto px-6 pt-6 pb-32 flex flex-col sm:items-center sm:text-center sm:pt-12"
        >
          <div
            id="version-text"
            className="flex items-center gap-2 bg-yellow-50 border border-yellow-300 my-6 px-2 py-1 w-fit rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition group"
          >
            <div className="w-2 h-2 bg-yellow-400 border border-yellow-600 rounded-full"></div>
            <p className="font-medium font-display text-yellow-600 ">
              v0.21.1:{" "}
              <span className="text-yellow-800">Find-in-page bug fixes</span>
            </p>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-yellow-600  group-hover:translate-x-1 transition duration-300"
            />
          </div>

          <div id="hero-features" className="hidden sm:flex gap-8 my-6">
            <div className="flex gap-2 justify-center items-center text-gray-500">
              <FontAwesomeIcon icon={faFileCode} />
              <p>Code Optional</p>
            </div>

            <div className="flex gap-2 justify-center items-center text-gray-500">
              <FontAwesomeIcon icon={faHandBackFist} />
              <p>Drag & drop builder</p>
            </div>

            <div className="flex gap-2 justify-center items-center text-gray-500">
              <FontAwesomeIcon icon={faLaptop} />
              <p>Windows, Mac, Linux</p>
            </div>
          </div>

          <h1 className="text-4xl font-semibold leading-snug mt-4 sm:text-6xl">
            Web app to desktop app in minutes
          </h1>

          <p className="text-xl mt-4 sm:text-2xl sm:mt-8">
            Take your web app codebase and transform it into a cross platform
            desktop app with native functionality.
          </p>

          <div
            id="buttons-container"
            className="flex flex-col gap-4 sm:flex-row mt-12"
          >
            <button className="px-8 py-3 font-semibold rounded-lg bg-primary text-white shadow-sm hover:bg-opacity-90">
              Download now
            </button>
            <button className="px-8 py-3 font-semibold rounded-lg border bg-white border-gray-400 hover:border-gray-800">
              Read Docs
            </button>
          </div>
        </div>

        <div id="companies-container" className="flex flex-col gap-10">
          <div id="companies-title" className="flex justify-center gap-2">
            <img className="translate-y-2" src={downArrow} alt="" />
            <span className="font-medium">APPS POWERED BY TODESKTOP</span>
            <img
              className="translate-y-2 -scale-x-100"
              src={downArrow}
              alt=""
            />
          </div>

          <div id="line-group" className="flex flex-col gap-4">
            <div
              id="line1"
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
            </div>

            <div
              id="line2"
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
            </div>

            <div
              id="line3"
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
        </div>
      </div>
    </>
  );
}

function ImageName({ imgName }) {
  return (
    <div className="flex flex-col gap-2 min-w-24 min-h-24 justify-center items-center bg-white rounded-xl  border border-gray-300 md:w-32 md:h-32">
      <img src={imgName} className="w-12 h-12 md:w-16 md:h-16" alt="" />
      <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
    </div>
  );
}
