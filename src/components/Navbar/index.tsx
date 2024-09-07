import * as React from "react";
import { Link } from "gatsby";
import Logo from "../Logo";

export default function Navbar() {
  return (
    <nav className="container m-auto flex justify-between items-center py-12">
      <h1>
        <Logo />
      </h1>

      <ul className="grid grid-cols-2 gap-4 text-xl">
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
