import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Pricing() {
  return (
    <div id="pricing" className="container">
      <h2 className="h2-style font-semibold ">
        Choose a plan that fits your needs
      </h2>
      <div className="flex flex-col lg:flex-row justify-between gap-8 mt-8">
        <PriceCard title="Free">
          For personal use or testing your app before deploying to customers.
        </PriceCard>
        <PriceCard title="Essential" price={true}>
          For simple desktop apps.
        </PriceCard>
        <PriceCard title="Professional" tag={true} price={true} vip={true}>
          For sophisticated desktop apps.
        </PriceCard>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function PriceCard({ title, children, price = false, vip, tag = false }) {
  return (
    <div className="border md:border-none md:bg-slate-50 rounded-xl flex-1 flex flex-col gap-6 px-6 py-8 relative">
      {tag && <Tag />}
      <h3 className="text-4xl ">{title}</h3>
      <p className="text-xl font-light">{children}</p>
      {price && (
        <p className="text-xl">
          <span className="text-2xl font-semibold">$99</span>/month
        </p>
      )}
      <p className="uppercase">Key Features</p>
      <ul className="space-y-4">
        <Item icon={faCheck} />
        <Item icon={faCheck} />
        <Item icon={faXmark} />
        <Item icon={faXmark} />
      </ul>

      <Button vip={vip} />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Button({ vip = false }) {
  return (
    <button
      className={` rounded-lg ${
        vip
          ? "text-indigo-100 bg-primary hover:opacity-90"
          : "border text-primary hover:border-gray-800"
      } py-2 font-semibold`}
    >
      Read Docs
    </button>
  );
}

// eslint-disable-next-line react/prop-types
function Item({ icon }) {
  return (
    <li className="flex items-center gap-4 text-gray-500">
      <FontAwesomeIcon icon={icon} />
      <span>Free for personal use</span>
    </li>
  );
}

function Tag() {
  return (
    <p className="bg-indigo-100 text-sm w-fit px-3 rounded-full py-2 font-bold text-indigo-800 absolute top-0 right-8 -translate-y-1/2">
      Most Popular
    </p>
  );
}
