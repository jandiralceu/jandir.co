import * as React from "react";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20 py-10">
      <div className="container m-auto">
        <div className="text-white">
          <Logo />
        </div>
      </div>
    </footer>
  );
}
