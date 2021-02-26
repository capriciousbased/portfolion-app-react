import React from "react";
import styled from "styled-components";
//import components to make up home page
import Header from "./components/Header";

const Home = () => {
  return (
    <HomeStyle>
      <Header />
    </HomeStyle>
  );
};
export default Home;
const HomeStyle = styled.div`
  margin-top: 0;
  padding-top: 0;
  @media (max-width: 550px) {
    margin-top: 30%;
  }
`;
