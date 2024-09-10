import * as React from "react";

export default function Subscribe() {
  return (
    <div className="h-16 bg-white w-full flex items-center rounded-full shadow-md">
      <input
        type="text"
        className="h-full w-full bg-transparent px-6 text-2xl outline-none "
        placeholder="Your e-mail address"
      />
      <button
        type="button"
        className="h-full bg-slate-600 text-white text-xl min-w-44 rounded-full shadow-md"
      >
        Subscribe
      </button>
    </div>
  );
}
