import React from "react";
import "./Header.css";
import SocialLinks from "./SocialLinks";

export default function Header() {
  return (
    <div className="home">
      <h1 className="home-headline">Hello, I'm Anis</h1>
      <h3 className="home-text">
        I'm a Berlin based <span>Frontend Developer</span>. After 12 years of
        providing professional Hospitality services,it's time to start the next
        stage of my journey.
      </h3>
      <SocialLinks />
    </div>
  );
}
