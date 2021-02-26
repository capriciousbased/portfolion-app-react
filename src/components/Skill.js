import React from "react";
import styled from "styled-components";
import odin from "../images/odin.png";
import {
  faGithub,
  faCss3Alt,
  faHtml5,
  faReact,
  faJs,
  faNode,
  faNpm,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import TileIcon from "./TileIcon";
import ScrollTop from "./ScrollTop";

const Skills = () => {
  const skillsArr = [
    {
      IconName: faReact,
      backgrnd: "black",
      maincolor: "#61dbfb",
      name: "REACT",
      key: 1,
    },

    {
      IconName: faCss3Alt,
      backgrnd: "#66d3fa",
      maincolor: "white",
      name: "CSS 3",
      pcolor: "black",
      key: 2,
    },
    {
      IconName: faHtml5,
      backgrnd: "#f16529",
      maincolor: "white",
      name: "HTML 5",
      pcolor: "black",
      key: 3,
    },
    {
      IconName: faJs,
      backgrnd: "#f0db4f",
      maincolor: "black",
      name: "JAVASCRIPT",
      pcolor: "black",
      key: 4,
    },
    {
      IconName: faNode,
      backgrnd: "white",
      maincolor: "#cc6699",
      name: "Nodejs",
      pcolor: "black",
      key: 5,
    },
    {
      IconName: faGithub,
      backgrnd: "black",
      maincolor: "white",
      name: "GIT-HUB",
      key: 6,
    },
    {
      IconName: faNpm,
      backgrnd: "white",
      maincolor: "#d9311b",
      name: "NPM",
      pcolor: "black",
      key: 7,
    },
    {
      IconName: faBootstrap,
      backgrnd: "white",
      name: "Bootstrap",
      img: faBootstrap,
      pcolor: "black",
      key: 8,
    },
  ];

  return (
    <SkillStyle>
      <TileHolder>
        {skillsArr.map((skill) => (
          <div key={skill.key}>
            <TileIcon
              IconName={skill.IconName}
              backgrnd={skill.backgrnd}
              maincolor={skill.maincolor}
              name={skill.name}
              pcolor={skill.pcolor}
              image={skill.img}
            />
          </div>
        ))}
      </TileHolder>
      <OdinStyle>
        <h3>
          I started Freecodcamp, teamtreehouse and the{" "}
          <a href="https://www.theodinproject.com/home">
            <img src={odin} alt="odin project" />
            Odin Project
          </a>{" "}
          Beginning of 2020 and have continued studying 5-6 hours per day
          everyday since, using weekends to create my projects.
        </h3>
      </OdinStyle>
      <ScrollTop />
    </SkillStyle>
  );
};
const SkillStyle = styled.div`
  width: 90%;
  height: 93vh;
  margin: 0 auto;
  background-color: rgb(231, 248, 205);
  color: rgb(54, 54, 54);
  display: flex;
  justify-content: space-between;
  padding: 5%;
  padding-bottom: 0;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 780px) {
    margin-top: 20%;
  }
  @media (max-width: 550px) {
    margin-top: 35%;
  }
  @media (max-width: 450px) {
    margin-top: 40%;
  }
`;
const TileHolder = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
`;
const OdinStyle = styled.div`
  width: 40%;
  text-align: right;
  padding: 10%;
  margin-bottom: 15%;
  line-height: 1.8;
  opacity: 0;
  animation: slide 1s linear 1s forwards;
  @keyframes slide {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  img {
    height: 30px;
    width: auto;
  }
  @media (max-width: 1000px) {
    width: 90%;
    text-align: center;
    margin-bottom: 5%;
  }
  a:link {
    color: rgb(54, 54, 54);
  }
  a:visited {
    color: rgb(54, 54, 54);
  }
`;

export default Skills;
