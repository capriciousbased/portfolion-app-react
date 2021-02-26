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
      <a href="https://www.facebook.com/capricious.based/" target="_blank">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://www.freecodecamp.com/capriciousbased" target="_blank">
        <FaFreeCodeCamp />
      </a>
    </li>
    <li>
      <a href="https://codepen.io/capriciousbased" target="_blank">
        <FaCodepen />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/md-anisul-hoque-khan-37582167/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://github.com/capriciousbased" target="_blank">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
