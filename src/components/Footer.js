import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div className="footerStyle">
      <span className="copy-right">
        &copy;{new Date().getFullYear()} Md Anisul H Khan
      </span>
    </div>
  );
};
export default Footer;
