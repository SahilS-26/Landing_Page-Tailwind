import c32 from "../assets/asset 32.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import founder from "../assets/asset 33.jpeg";
import c34 from "../assets/asset 34.png";

export default function CustomerStories() {
  return (
    <div id="Testimonials" className="container">
      <h2 className="text-5xl sm:font-semibold mb-14">Customer stories</h2>
      <div className="border rounded-xl flex flex-col lg:flex-row items-end">
        <div className="flex flex-col gap-12 p-8">
          <span className="h-4 w-fit">
            <img src={c32} alt="" />
          </span>
          <h3 className="text-xl leading-relaxed">
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
          <img src={c34} alt="" className="pl-12" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-4 mt-6">
        <Card></Card>
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
  return <div></div>;
}
