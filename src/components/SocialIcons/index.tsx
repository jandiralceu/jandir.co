import * as React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

type SocialIconProps = {
  iconSize?: FontAwesomeIconProps["size"];
} & Partial<React.HTMLAttributes<HTMLElement>>;

export default function SocialIcons({
  iconSize = "xl",
  className,
  ...rest
}: SocialIconProps) {
  return (
    <section className={className} {...rest}>
      <a
        href="https://www.youtube.com/channel/UCtBEtQ2wOra3eGJt-lIMr_A"
        target="_blank"
      >
        <FontAwesomeIcon icon={faYoutube} size={iconSize} />
      </a>

      <a href="https://github.com/jandiralceu" target="_blank">
        <FontAwesomeIcon icon={faGithub} size={iconSize} />
      </a>

      <a href="https://github.com/jandiralceu" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
      </a>
    </section>
  );
}
