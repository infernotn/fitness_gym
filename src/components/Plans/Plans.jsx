import React from "react";
import "./Plans.css";
import Plan_card from "./Plan_card/Plan_card";
import Heart from "../../assets/heart.png";
const plans = [
  {
    logo: Heart,
    title: "BASIC PLAN",
    price: 25,
    plan_details: [
      "2 hours of excercises",

      "Free consultaion to coaches",
      "Access to The Community",
    ],
  },
  {
    logo: Heart,
    title: "PREMIUM PLAN",
    price: 30,
    plan_details: [
      "5 hour of excercises",
      "Free consultaion of Coaches",
      "Accessto minibar",
    ],
  },
  {
    logo: Heart,
    title: "PRO PLAN",
    price: 45,
    plan_details: [
      "8 hours of excercises",
      "Consultation of Private Coach",
      "Free Fitness Merchandises",
    ],
  },
];
export const Plans = () => {
  return (
    <div className="Plans">
      <div className="Plans-t">
        <span className="Stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="Stroke-text">NOW WITHUS</span>
      </div>
      <div className="Plans-cards">
        {plans.map((plan) => {
          return (
            <Plan_card
              logo={plan.logo}
              title={plan.title}
              price={plan.price}
              plan_details={plan.plan_details}
            />
          );
        })}
      </div>
    </div>
  );
};
