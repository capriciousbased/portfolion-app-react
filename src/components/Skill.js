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
import "./Skills.css";

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
    <div className="skillStyle">
      <div className="tileHolder">
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
      </div>
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
    </div>
  );
};

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
