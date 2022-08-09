import React from "react";
import "./Programs.css";
import flame from "../../assets/flame.svg";
import runing from "../../assets/runing.svg";
import heartHealth from "../../assets/heartHealth.svg";
import dumbell from "../../assets/dumbell.svg";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";
const ProgramCard = (props) => {
  return (
    <motion.div
      className="ProgramCard"
      whileHover={{
        height: "20rem",
        gap: "1.5rem",
        backgroundColor: "#f48915",
        z: 10,
        scale: 1.05,
        transition: {
          delay: 0.1,
          duration: 0.2,
          ease: "easeInOut",
        },
      }}
    >
      <img src={props.image} alt="" />
      <span>{props.title}</span>
      <span>{props.description}</span>
      <div>
        <span>Join Now</span>

        <img src={rightArrow} alt="" srcset="" />
      </div>
    </motion.div>
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
