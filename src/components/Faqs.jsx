import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Faqs() {
  return (
    <div className="container">
      <h2 className="h2-style mb-8">FAQs</h2>
      <div className="  grid items-start lg:grid-cols-2 gap-8">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Item() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="border rounded-xl bg-slate-50 cursor-pointer p-4"
      onClick={() => setIsOpen((open) => !open)}
    >
      <dt className="flex justify-between items-center text-gray-800 font-semibold lg:text-xl gap-8">
        <p>Is ToDesktop For Me?</p>
        <span>
          <FontAwesomeIcon
            className={`${
              isOpen ? "-rotate-180" : ""
            } transition transition-transform ease-linear `}
            icon={faAngleDown}
          />
        </span>
      </dt>
      <dd className={`pt-4 pb-4 ${isOpen ? "block" : "hidden"}`}>
        <p className="text-lg font-light">
          That depends! If you would like to distribute your web app to your
          users as a downloadable desktop app then ToDesktop is for you.
        </p>
      </dd>
    </div>
  );
}
