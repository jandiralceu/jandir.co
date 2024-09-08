import * as React from "react";
import { Link } from "gatsby";

type NavbarProps = {} & Partial<React.HTMLAttributes<HTMLUListElement>>;

export default function Navbar({
  children,
  className,
  ...rest
}: React.PropsWithChildren<NavbarProps>) {
  return (
    <ul
      className={[
        "flex justify-center items-center gap-6 text-xl",
        className,
      ].join(" ")}
      {...rest}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      {children && children}
    </ul>
  );
}
