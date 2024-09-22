import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import c27 from "../assets/asset 27.svg";

export default function StepFeatures() {
  return (
    <>
      <div
        id="steps"
        className="px-6 py-12 lg:px-8 flex flex-col gap-6 mt-20 container mx-auto"
      >
        <h2 className="text-5xl sm:font-semibold mb-4">How it works</h2>

        <Steps step="Step 1" />
        <Steps step="Step 2" />
        <Steps step="Step 3" />
      </div>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function Steps({ step }) {
  return (
    <div
      id="step1"
      className="px-8 py-12 rounded-xl border gap-12 flex flex-col lg:flex-row justify-between"
    >
      <div className="flex flex-col gap-6 lg:w-1/2">
        <span className="bg-yellow-50 border border-yellow-400 rounded-lg w-fit px-3 py-1 text-yellow-800 font-medium font-display">
          {step}
        </span>
        <h3 className="text-4xl">Bootstrap straight from your web app</h3>
        <p className="text-lg font-light">
          Copy and paste your web app url into ToDesktop. Customise your app
          design, app icon and window frame UI with no code.
        </p>
        <ul className="grid grid-cols-2 gap-2">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
      </div>
      <div className="mt-12">
        <img src={c27} alt="" />
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <li className="flex gap-2 items-center">
      <FontAwesomeIcon icon={faCheck} className="text-gray-500" />
      <span className="border-b border-gray-800 border-opacity-30 hover:border-opacity-80 text-gray-500 text-lg">
        Multiple windows
      </span>
    </li>
  );
}
