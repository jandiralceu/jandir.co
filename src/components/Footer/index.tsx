import * as React from "react";

import Logo from "../Logo";
import SiteDescription from "../SiteDescription";
import SocialIcons from "../SocialIcons";
import Navbar from "../Navbar";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20 py-20">
      <div className="container m-auto flex justify-center items-center flex-col gap-12">
        <Logo />

        <Navbar>
          <li className="hover:border-b-2 pb-2">
            <a href="/sitemap.xml">Sitemap</a>
          </li>
        </Navbar>

        <SiteDescription className="text-xl font-extralight" />

        <SocialIcons className="flex justify-center items-center gap-8" />
      </div>

      <div className="container m-auto flex justify-between items-center text-xs mt-20">
        <p>All rights reserved © jandir.co {currentYear} </p>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Term of use
        </a>
      </div>
    </footer>
  );
}
