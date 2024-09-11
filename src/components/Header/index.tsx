import * as React from "react";

import Logo from "../Logo";
import SocialIcons from "../SocialIcons";
import Navbar from "../Navbar";

export default function Header() {
  return (
    <nav className="container m-auto flex justify-between items-center py-12">
      <h1>
        <Logo />
      </h1>

      <Navbar
        activeBorderClassName="border-b-black"
        hoverBorderClassName="border-b-black/60"
      />

      <SocialIcons
        className="flex justify-center items-center gap-6"
        iconClassName="text-slate-500 hover:text-slate-950 transition-color duration-300 fade-in"
      />
    </nav>
  );
}
