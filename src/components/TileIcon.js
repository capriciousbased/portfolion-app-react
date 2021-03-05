import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TileIcon.css";

const TileIcon = ({ IconName, backgrnd, maincolor, name, pcolor, image }) => {
  const [display, setDisplay] = useState(false);
  const mouseHandler = () => {
    setDisplay(true);
  };
  const leaveHandler = () => {
    setDisplay(false);
  };
  return (
    <div>
      <div
        className="tile"
        style={{ backgroundColor: backgrnd }}
        onMouseLeave={leaveHandler}
        onMouseOver={mouseHandler}
      >
        {IconName === "" ? (
          <img src={image} alt="logo" />
        ) : (
          <FontAwesomeIcon color={maincolor} size="5x" icon={IconName} />
        )}
        {display ? <p style={{ color: pcolor }}>{name} </p> : <p></p>}
      </div>
    </div>
  );
};
export default TileIcon;
