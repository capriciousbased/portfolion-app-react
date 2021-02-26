import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Anisul Hoque Khan.</h1>
      <h3>
        I'm a Berlin based <span>Frontend Developer</span>. After 12 years of
        creating adventures for others,it's time to start the next stage of my
        journey.
      </h3>
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
