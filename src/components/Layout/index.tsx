import * as React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <div className="mt-14 container m-auto">{children}</div>
      <Footer />
    </div>
  );
}
