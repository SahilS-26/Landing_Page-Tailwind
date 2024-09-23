import c32 from "../assets/asset 32.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCode, faDownload } from "@fortawesome/free-solid-svg-icons";
import founder from "../assets/asset 33.jpeg";
import c34 from "../assets/asset 34.png";
import c35 from "../assets/asset 35.png";
import c36 from "../assets/asset 36.jpeg";

export default function CustomerStories() {
  return (
    <div className="bg-gradient-to-br from-black via-purple-950 to-indigo-950 pt-2 pb-2 ">
      <div id="Testimonials" className="container">
        <h2 className="text-5xl lg:text-6xl  sm:font-semibold lg:font-bold mb-14 bg-gradient-to-r from-purple-800 via-indigo-400 to-transparent text-transparent bg-clip-text ">
          Customer stories
        </h2>

        <div className=" rounded-xl bg-gradient-to-br from-purple-300 via-indigo-50 to-transparent  flex flex-col lg:flex-row lg:p-8 items-end">
          <div className="flex flex-col gap-12 p-8">
            <span className="h-4 w-fit">
              <img src={c32} alt="" />
            </span>
            <h3 className="text-xl leading-relaxed lg:text-3xl">
              ClickUp used ToDesktop to get their desktop app in front of
              customers in days instead of months.
            </h3>
            <div id="tag-container" className="flex flex-wrap gap-3">
              <Tag>Chromeless UI</Tag>
              <Tag>Native spellcheck</Tag>
              <Tag>Task time in menubar</Tag>
              <Tag>Notification count in the dock</Tag>
              <Tag>Global hotkey to create task</Tag>
            </div>
            <p className="text-lg font-light text-gray-500">
              “ToDesktop provided us with a{" "}
              <span className="text-gray-800">polished desktop app</span> in no
              time. Their expert team guided us through a smooth migration from
              our outdated legacy desktop app, enabling us to deliver new and
              improved features to our customers within days.”
            </p>

            <div id="card" className="flex gap-4">
              <div className="w-12">
                <img src={founder} alt="" className="rounded-full" />
              </div>
              <div className="flex flex-col ">
                <h3>Zeb Evans</h3>
                <p className="text-gray-500">
                  Founder & CEO,{" "}
                  <a href="#" className="anchor-link">
                    ClickUp
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src={c34}
              alt=""
              className="pl-12 rounded-br-xl lg:translate-y-8 lg:translate-x-8"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-4 mt-16">
          <Card />
          <Card />
          <Card />
        </div>

        {/* <div className="bg-black rounded-xl flex flex-col lg:flex-row gap-8 p-8 mt-16"> */}
        <div className="bg-gradient-to-br from-black via-purple-950 to-indigo-950 rounded-xl flex flex-col lg:flex-row gap-8 lg:p-8 mt-16">
          <div className="flex flex-col gap-8 p-8 lg:flex-1 lg:gap-12">
            <span className="text-gray-400 font-semibold lg:text-2xl ">
              READY TO START BUILDING?
            </span>
            <h3 className="text-4xl text-white leading-snug lg:text-6xl">
              Create your desktop app for free*
            </h3>

            <p className="text-lg font-light text-gray-400 lg:text-2xl">
              ToDesktop Builder will take you step-by-step through the process
              of creating your first desktop app in just a few minutes.
            </p>

            <button className="bg-primary px-2 py-2 text-white flex justify-center items-center gap-4 rounded-lg hover:bg-opacity-90">
              <FontAwesomeIcon icon={faDownload} />
              <span>Download ToDeskop Builder</span>
            </button>

            <p className="text-gray-400 text-xs italic">
              *You can create a desktop app and run it on your computer for
              free. You will only be charged if you want to create a
              distributable app for your customers.
            </p>
          </div>

          <div className="lg:w-1/2 self-end lg:translate-y-8 lg:translate-x-8">
            <img src={c34} alt="" className="pl-12" />
          </div>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Tag({ children }) {
  return (
    <div className="flex items-center justify-center gap-2 text-yellow-800 bg-yellow-50 w-fit px-3 py-1 border border-yellow-300 rounded-md ">
      <FontAwesomeIcon icon={faCheck} />
      <span className="font-display font-medium">{children}</span>
    </div>
  );
}

function Card() {
  return (
    <div className="group rounded-2xl gradient-hover-outer">
      <div className=" flex flex-col gap-6 rounded-2xl gradient-hover-inner">
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 bg-blue-200 flex justify-center items-center rounded-full">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <h3 className="text-2xl font-semibold">Native APIs</h3>
        </div>

        <p className="text-lg font-light text-justify ">
          What sets ToDesktop apart is its seamless integration with native APIs
          using our existing web codebase. By tapping into APIs like Tray and
          Notifications, we've crafted an exceptionally polished desktop user
          experience.
        </p>

        <div className="flex gap-4">
          <div className="flex">
            <div className=" -mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
              <img src={c35} alt="" className="min-w-16 min-h-16" />
            </div>

            <div className="h-12 w-12 rounded-full overflow-hidden border border-white">
              <img src={c36} alt="" />
            </div>
          </div>

          <div className="flex flex-col ">
            <h3>Rick Pastoor</h3>
            <a href="#" className="anchor-link w-fit text-gray-500 ">
              Rise
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
