import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/asset 0.png";
import btnImage from "../assets/asset 1.svg";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen((open) => !open);
  }

  return (
    <>
      <nav className="p-3 bg-white flex justify-between items-center ">
        {/* 1 */}
        <LogoName className="flex-1" />

        {/*2 - Desktop nav -- nav links*/}
        <>
          <div id="nav-menu" className="hidden lg:flex gap-10">
            <a href="#" className="font-medium hover:text-primary">
              Pricing
            </a>
            <a href="#" className="font-medium hover:text-primary">
              Docs
            </a>
            <a href="#" className="font-medium hover:text-primary">
              Changelog
            </a>
            <a href="#" className="font-medium hover:text-primary">
              Blogs
            </a>
            <a href="#" className="font-medium hover:text-primary">
              Login
            </a>
          </div>

          <div className="hidden lg:flex flex-1 justify-end">
            <button className="  flex gap-2 items-center border border-gray-400 rounded-lg px-6 py-2 hover:border-gray-600">
              <img src={btnImage} alt="" />
              <span>Electron Developers</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </>

        {/* 3 */}
        <Button isOpen={isOpen} handleMenu={handleMenu} />

        {/* Nav for mobile */}
        {isOpen && (
          <div
            id="nav-dialog"
            className="lg:hidden fixed z-10 bg-white inset-0 p-3"
          >
            <div id="nav-bar" className="flex justify-between items-center">
              <LogoName />
              <Button isOpen={isOpen} handleMenu={handleMenu} />
            </div>

            {/* nav links */}
            <div className="mt-6">
              <a
                href="#"
                className="block m-3 p-3 font-medium hover:bg-gray-50 rounded-lg"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block m-3 p-3 font-medium hover:bg-gray-50 rounded-lg"
              >
                Docs
              </a>
              <a
                href="#"
                className="block m-3 p-3 font-medium hover:bg-gray-50 rounded-lg"
              >
                Changelog
              </a>
              <a
                href="#"
                className="block m-3 p-3 font-medium hover:bg-gray-50 rounded-lg"
              >
                Blogs
              </a>
              <a
                href="#"
                className="block m-3 p-3 font-medium hover:bg-gray-50 rounded-lg"
              >
                Login
              </a>
            </div>

            <div className="h-[1px] bg-gray-300"></div>

            <button className="mt-6 flex gap-2 items-center  hover:bg-gray-50 rounded-lg px-6 py-4 w-full">
              <img src={btnImage} alt="" />
              <span>Electron Developers</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        )}
      </nav>
    </>
  );
}

function LogoName({ className = "" }) {
  return (
    <>
      <a href="#" id="brand" className={`flex gap-2 items-center ${className}`}>
        <img className="object-cover max-w-12 max-h-12" src={logo} alt="logo" />
        <span className="text-lg font-medium font-display">ToDesktop</span>
      </a>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function Button({ isOpen, handleMenu }) {
  return (
    <>
      <button className="p-2 lg:hidden" onClick={handleMenu}>
        <FontAwesomeIcon
          icon={isOpen ? faX : faBars}
          className="text-gray-600"
        />
      </button>
    </>
  );
}
