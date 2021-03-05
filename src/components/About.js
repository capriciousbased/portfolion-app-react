import React from "react";
import Odin from "../images/odin.png";
import WorkSkills from "./WorkSkills";
import ScrollTop from "./ScrollTop";
import "./About.css";

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
    <div className="aboutStyle">
      <h1>About Me</h1>
      <h3>
        My background is Hospitality and Management and for the last 12 years I
        worked in Local and International Hospitality Properties . I have been
        looking for a new direction and the challenges of 2020 have provided the
        opportunity for change. Since starting of 2020 I have fully submerged
        myself into study of the Full Stack Web Development Courses like
        freecode Camp, team treehouse Frontend web Development, Udemy Complet
        web Development course and the Odin Project.
      </h3>
      <p>
        The Freecode camp and Odin project is free open source coding curriculum
        and is maintained and improved by a team of contributors which aims to
        help it constantly update to the demands of the industry. I began on
        their foundation course working my way through lessons on HTML and CSS,
        these are interspersed with projects, all of which rather than holding
        your hand throughout are very much self driven. They believe that
        building projects and actually being hands on is the best way to learn,
        it forces you to solve any problems by breaking them down into more
        manageable sections before moving on.
      </p>
      <p>
        There are a couple of different paths after the foundation course and I
        decided to go through their full stack Javascript course next, starting
        with Javascript objects, functions and classes before moving onto ES6
        modules. Finally this Course has worked through React, Webpack,
        async/await, Node JS and onto test driven development using Jest
        alongside React.
      </p>
      <a href="https://www.theodinproject.com/home">
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
      </p>
      <ColoredLine color="rgb(54,54,54)" width="90%" />
      <WorkSkills />

      <ScrollTop />
    </div>
  );
};
export default About;
