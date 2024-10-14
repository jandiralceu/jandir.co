import * as React from "react";

import Navbar from "../Header";
import Footer from "../Footer";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <div className="mt-20 mb-40">{children}</div>
      <Footer />
    </div>
  );
}
