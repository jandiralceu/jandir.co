import * as React from "react";

import Logo from "../Logo";
import SiteDescription from "../SiteDescription";
import SocialIcons from "../SocialIcons";
import Navbar from "../Navbar";
import Subscribe from "../Subscribe";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white mt-20 py-20">
      <div className="container m-auto flex justify-center items-center flex-col gap-12">
        <section className="w-full grid grid-cols-[1fr_500px] items-center">
          <h3 className="text-5xl">
            Subscribe to <strong className="font-bold">new posts</strong>
          </h3>
          <Subscribe />
        </section>

        <hr className="bg-white w-full" />

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
