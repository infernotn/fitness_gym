import React from "react";
import "./Programs.css";
import flame from "../../assets/flame.svg";
import runing from "../../assets/runing.svg";
import heartHealth from "../../assets/heartHealth.svg";
import dumbell from "../../assets/dumbell.svg";
import rightArrow from "../../assets/rightArrow.png";

const ProgramCard = (props) => {
  return (
    <div className="ProgramCard">
      <img src={props.image} alt="" />
      <span>{props.title}</span>
      <span>{props.description}</span>
      <div>
        <span>Join Now</span>

        <img src={rightArrow} alt="" srcset="" />
      </div>
    </div>
  );
};

export const Programs = () => {
  return (
    <div className="Programs">
      <div className="Title-p">
        <span className="Stroke-text">EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className="Stroke-text">TO SHAPE YOU</span>
        <div className="Programs-list"></div>
      </div>
      <div className="ProgramsCards">
        <ProgramCard
          image={dumbell}
          title="Strength Training"
          description="In this program, you are trained to improve your strength through many exercises."
        />
        <ProgramCard
          image={runing}
          title="Cardio Training"
          description="In this program, you are trained to do sequential moves in range of 20 until 30 minutes."
        />
        <ProgramCard
          image={flame}
          title="Fat Burning"
          description="This program is suitable for you who wants to get rid of your fat and lose their weight."
        />
        <ProgramCard
          image={heartHealth}
          title="Health Fitness"
          description="This programs is designed for those who exercises only for their body fitness not body building."
        />
      </div>
    </div>
  );
};
