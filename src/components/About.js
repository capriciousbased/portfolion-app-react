import React from "react";
import Odin from "../images/odin.png";

import styled from "styled-components";
import WorkSkills from "./WorkSkills";
import ScrollTop from "./ScrollTop";

const About = () => {
  const ColoredLine = ({ color, width }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 3,
        width: width,
        marginBottom: 20,
        marginTop: 20,
      }}
    />
  );
  return (
    <AboutStyle>
      <h1>About Me</h1>
      <h3>
        My background is Hospitality and Management and for the last 12 years I
        worked in Local and International Hospitality Properties . I have been
        looking for a new direction and the challenges of 2020 have provided the
        opportunity for change. Since starting of 2020 I have fully submerged
        myself into study of the Full Stack Web Development Courses like
        freecode Camp, team treehouse Frontend web Development, Udemy Complet
        web Development course and Techlabs Bootcamp.
      </h3>
      <p>

      </p>
      <p>
.
      </p>
      {/* <a href="https://www.theodinproject.com/home">
        <img src={Odin} alt="odin project" />
        The Odin Project
      </a>

      <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
      <p>
        I have thoroughly enjoyed the challenge of working through each project,
        seeing the knowledge I have been taught in each lesson come to use. I
        have on average spent 7-8 hrs per day working through the course
        supplemented with learning from You Tube and TED talks. The project
        itself offered various differing means of learning each topic from
        online tutorials to articles.
      </p> */}
      <ColoredLine color="rgb(54,54,54)" width="90%" />
      <WorkSkills />

      <ScrollTop />
    </AboutStyle>
  );
};
export default About;
const AboutStyle = styled.div`
  width: 80%;
  height: 100%;
  padding: 10%;
  margin: 0 auto;
  background-color: #dbe2ef;
  color: rgb(54, 54, 54);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  opacity: 0;
  margin-top: 50%;
  animation: arise 1.2s ease-out 0.2s forwards;
  @keyframes arise {
    0% {
      margin-top: 50%;
      opacity: 0;
    }
    100% {
      margin-top: 0%;
      opacity: 1;
    }
  }

  @media (max-width: 780px) {
    margin-top: 30%;
    animation: none;
    opacity: 1;
  }
  @media (max-width: 550px) {
    margin-top: 50%;
    opacity: 1;
  }
  p {
    align-items: center;
  }

  a:link {
    color: rgb(54, 54, 54);

    display: flex;
    justify-content: center;
    align-items: center;
  }
  a:visited {
    color: rgb(54, 54, 54);

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
