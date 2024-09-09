import * as React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

type NavbarProps = {} & Partial<React.HTMLAttributes<HTMLUListElement>>;

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
];

export default function Navbar({
  children,
  className,
  ...rest
}: React.PropsWithChildren<NavbarProps>) {
  const location = useLocation();

  return (
    <ul
      className={[
        "flex justify-center items-start gap-6 text-2xl font-normal",
        className,
      ].join(" ")}
      {...rest}
    >
      {menuItems.map(({ path, name }) => {
        const isCurrentRoute =
          path === "/blog"
            ? location.pathname.includes("/blog")
            : location.pathname === path;

        return (
          <Link
            key={path}
            to={path}
            className={[
              "pb-2",
              isCurrentRoute ? "font-bold border-b-2" : "hover:border-b-2",
            ].join(" ")}
          >
            {name}
          </Link>
        );
      })}
      {children && children}
    </ul>
  );
}
