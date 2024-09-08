import * as React from "react";
import { Link } from "gatsby";

import Logo from "../Logo";
import SocialIcons from "../SocialIcons";

export default function Navbar() {
  return (
    <nav className="container m-auto flex justify-between items-center py-12">
      <h1>
        <Logo />
      </h1>

      <ul className="flex justify-center items-center gap-6 text-xl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <SocialIcons className="flex justify-center items-center gap-6" />
    </nav>
  );
}
