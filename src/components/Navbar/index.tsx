import * as React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

type NavbarProps = {
  activeBorderClassName?: React.HTMLAttributes<HTMLElement>["className"];
  hoverBorderClassName?: React.HTMLAttributes<HTMLElement>["className"];
} & Partial<React.HTMLAttributes<HTMLUListElement>>;

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
];

export default function Navbar({
  children,
  className,
  activeBorderClassName,
  hoverBorderClassName,
  ...rest
}: React.PropsWithChildren<NavbarProps>) {
  const location = useLocation();

  return (
    <ul
      className={[
        "flex justify-center items-start gap-6 text-xl font-normal",
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
              "pb-2 ",
              isCurrentRoute
                ? `font-bold border-b-2 ${activeBorderClassName}`
                : `border-b-0 hover:border-b-2 transition-all duration-300 ease-in ${hoverBorderClassName}`,
            ].join(" ")}
            title={name}
          >
            {name}
          </Link>
        );
      })}
      {children}
    </ul>
  );
}
