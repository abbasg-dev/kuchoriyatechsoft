import style from "./ServiceCard.module.css";
import React from "react";

const ServiceCard = (props) => {
  return (
    <div className={style.root}>
      <div className={style.cardContent}>
        <img className={"serviceCardLogo"} src={props.image} />
        <h2 className={"serviceCardTitle"}>{props.title}</h2>
        <h5 className={"serviceCardDesc"}>{props.description}</h5>
      </div>
      <button className={"serviceCardLearnMore"}>View More</button>

      <style jsx>
        {`
          .serviceCardLogo {
            margin-top: 12px;
          }
          .serviceCardTitle {
            padding: 16px 8px;
            color: #fd7e14;
            font-size: 22px;
            font-weight: 500;
          }
          .serviceCardDesc {
            padding: 6px 16px;
            font-weight: 200;
            font-size: 16px;
            text-align: left;
          }
          .serviceCardLearnMore {
            padding-top: 12px;
            padding-bottom: 12px;
            background-color: #fd7e14;
            border-width: 0;
            color: white;
            font-size: 16px;
            width: 100%;
            outline: none;
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
          }
        `}
      </style>
    </div>
  );
};

export default ServiceCard;
