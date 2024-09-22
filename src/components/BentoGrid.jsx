import c28 from "../assets/asset 28.png";
import c29 from "../assets/asset 29.png";
import c30 from "../assets/asset 30.png";
import c31 from "../assets/asset 31.png";

export default function BentoGrid() {
  return (
    <div id="bento-grid" className="container">
      <h2 className="text-5xl sm:font-semibold mb-4">
        ToDesktop handles the details
      </h2>

      <div className="flex flex-col gap-6 lg:grid  grid-cols-3 mt-12">
        <Item title="Native Notifications" imgName={c28} text="" />
        <Item
          title="Native Notifications"
          imgName={c29}
          text="We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features."
          className="row-span-2"
        />
        <Item title="Native Notifications" imgName={c30} text="" />
        <Item
          title="Native Notifications"
          imgName={c31}
          text="We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features."
          className="row-span-2"
        />
        <Item
          title="Native Notifications"
          imgName={c29}
          text="We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features."
          className="row-span-2"
        />
        <Item title="Native Notifications" imgName={c28} text="" />
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Item({ title, imgName, className, text = "" }) {
  return (
    <div
      className={`group rounded-2xl p-[2px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 ${
        className ? className : ""
      }`}
    >
      <div
        className={`rounded-2xl p-6  w-full h-full flex flex-col items-center text-center gap-4 bg-slate-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 `}
      >
        <h3 className="text-2xl">{title}</h3>
        {text && <p>{text}</p>}
        <img src={imgName} alt="" />
      </div>
    </div>
  );
}
