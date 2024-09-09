import * as React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faLinkedin,
  faInstagram,
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
        rel="noopener noreferrer"
        title="YouTube"
      >
        <FontAwesomeIcon icon={faYoutube} size={iconSize} />
      </a>

      <a
        href="https://github.com/jandiralceu"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <FontAwesomeIcon icon={faGithub} size={iconSize} />
      </a>

      <a
        href="https://github.com/jandiralceu"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
      </a>

      <a
        href="https://github.com/jandiralceu"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} size={iconSize} />
      </a>
    </section>
  );
}
