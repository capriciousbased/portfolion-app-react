import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaCodepen,
  FaLinkedin,
  FaFreeCodeCamp,
} from "react-icons/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a
        href="https://www.facebook.com/capricious.based/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
    </li>
    <li>
      <a
        href="https://www.freecodecamp.com/capriciousbased"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFreeCodeCamp />
      </a>
    </li>
    <li>
      <a
        href="https://codepen.io/capriciousbased"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaCodepen />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/md-anisul-hoque-khan-37582167/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a
        href="https://github.com/capriciousbased"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
