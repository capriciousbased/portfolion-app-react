import React from "react";
import "./WorkSkills.css";

//image imports
import teamwork from "../images/teamwork.png";
import problem from "../images/problem.png";
import time from "../images/time.png";
import pressure from "../images/pressure.png";
import accuracy from "../images/accuracy.png";
import conversation from "../images/conversation.png";

const WorkSkills = () => {
  const Skills = [
    {
      name: "Teamwork",
      image: teamwork,
      article:
        "I valued being part of a team and collaboration was a massive part of my success at Hospitality Industry. Aside from our immediate unit, I was also part of a much larger network that included back office operations and I worked closely alongside suppliers, inventory, storage and most importantly our customers.",
    },
    {
      name: "Problem Solving",
      image: problem,
      article:
        "Seamlessly linking together complex programms or quickly resolving issues by utilising the various packages or externally by suppliers. Aided by my ability to memorise a multitude of commands, drawing on past experience, adapting to new systems and never being afraid to turn to senior colleagues, suppliers or even Google to get the answer required.",
    },
    {
      name: "Working under pressure",
      image: pressure,
      article:
        "The ability to work under pressure was essential to my role at Hospitality Industries. I could be aiding a customer in an emergency situation, striving to hitting targets, handling an influx of calls brought on by flash sales or abiding to management demands.",
    },
    {
      name: "Accuracy",
      image: accuracy,
      article:
        "This could be as simple as triple checking Guests names and payment transactions etc through to checking on supplier contracts. A little communication mistake could creat a huge impact or after effect to the Brand Standard.",
    },
    {
      name: "Time Management",
      image: time,
      article:
        "A little ahead of the current trend, I have actually worked under pressure and Deadlines. I have excellent time management skills, am good at multitasking and work well unsupervised. ",
    },
    {
      name: "Communication",
      image: conversation,
      article:
        "Working in Guest Service, communication as always been one of my best assets. I am friendly and approachable, conversing easily with people from a broad range of backgrounds.",
    },
  ];

  return (
    <div className="workStyle">
      <h2>Skills</h2>
      <h3>To my career as a developer I can bring strong attributes:</h3>
      <div className="containerStyle">
        {Skills.map((a) => {
          return (
            <div className="boxStyle" key={a.name}>
              <img src={a.image} alt={a.name} />
              <h3>{a.name}</h3>
              <p>{a.article}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default WorkSkills;
