import logo from "../assets/asset 0.png";
import YC from "../assets/asset 37.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="container ">
      <div className="flex flex-col-reverse gap-8 items-center bg-gray-50 p-8 rounded-lg lg:flex-row lg:items-center lg:justify-between">
        <a href="#" id="brand" className={`flex gap-2 items-center`}>
          <img
            className="object-cover max-w-12 max-h-12"
            src={logo}
            alt="logo"
          />
          <span className="text-lg font-medium font-display">ToDesktop</span>
        </a>

        <div
          id="socials"
          className="flex flex-col items-center gap-4 lg:flex-row text-lg"
        >
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Documentation
          </a>
        </div>
      </div>

      <div className="p-8 flex flex-col items-center gap-8">
        <div className="flex gap-4 items-center">
          <div className="w-6 h-6">
            <img src={YC} alt="Y-Combinator" />
          </div>
          <p className="text-gray-800">A Y Combinator company.</p>
        </div>

        <p className="text-gray-400 font-semi-bol text-sm">
          © 2024 ToDesktop, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
