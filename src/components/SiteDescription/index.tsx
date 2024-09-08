import * as React from "react";

export default function SiteDescription({
  className,
  ...rest
}: Partial<React.HTMLAttributes<HTMLHeadingElement>>) {
  return (
    <h2 className={["font-extralight", className].join(" ")} {...rest}>
      <strong className="font-semibold">Hey, I'm Jandir A. Cutabiala</strong>. I
      explore real-world{" "}
      <strong className="font-semibold">software engineering</strong> challenges
      and <strong className="font-semibold">share solutions</strong> from my
      daily <strong className="font-semibold">experience</strong>.
    </h2>
  );
}
