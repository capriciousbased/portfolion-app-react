import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <FooterStyle>
      <span className="copy-right">&copy;2020 Md Anisul H Khan.</span>
    </FooterStyle>
  );
};
export default Footer;

const FooterStyle = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgb(54, 54, 54);
  color: rgb(231, 248, 205);
  align-items: center;
  position: relative;
  bottom: 0;
`;
