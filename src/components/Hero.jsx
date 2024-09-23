import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHandBackFist,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/fontawesome-free-regular";
import downArrow from "../assets/asset 2.svg";

import ScrollEffect from "./ScrollEffect";

export default function Hero() {
  return (
    <>
      <div
        id="hero"
        className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-trasparent pt-16"
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

          <h1 className="text-4xl font-semibold leading-snug mt-4 sm:text-6xl bg-gradient-to-r from-purple-600  via-indigo-600 to-pink-600 text-transparent bg-clip-text">
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

          <ScrollEffect />
        </div>
      </div>
    </>
  );
}
