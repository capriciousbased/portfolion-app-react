import React from "react";
import "./Header.css";
import SocialLinks from "./SocialLinks";

export default function Header() {
  return (
    <div className="home">
      <h1 className="home-headline">Hello, I'm Anis</h1>
      <h3 className="home-text">
        I'm a Berlin based <span>Devops Engineer</span>.
      </h3>
      <SocialLinks />
    </div>
  );
}
