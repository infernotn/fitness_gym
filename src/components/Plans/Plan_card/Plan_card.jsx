import React from "react";
import "./Plan_card.css";
import { motion } from "framer-motion";
import { TiInputChecked } from "react-icons/ti";
import { AiOutlineArrowRight } from "react-icons/ai";
const Plan_card = (props) => {
  return (
    <motion.div
      className="Plan-card"
      whileHover={{
        originX: 0.5,
        originY: 1,
        scale: 1.1,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      }}
    >
      <img src={props.logo} alt="" srcset="" />
      <span>{props.title}</span>
      <span>$ {props.price}</span>
      <div className="details">
        {props.plan_details.map((detail) => {
          return (
            <div>
              <TiInputChecked size={35} />
              <span>{detail}</span>
            </div>
          );
        })}
      </div>
      <div className="More">
        <span>See more benefits</span>
        <AiOutlineArrowRight />
      </div>
      <div className="join">
        <motion.button
          whileHover={{
            scale: 1.05,
            transition: {
              duration: 0.2,
            },
          }}
        >
          {" "}
          Join now
        </motion.button>
      </div>
    </motion.div>
  );
};
export default Plan_card;
