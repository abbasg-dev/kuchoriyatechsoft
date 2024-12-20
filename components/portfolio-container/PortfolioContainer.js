import Portfolio from "./portfolio/Portfolio";
import React from "react";
import styles from "./PortfolioContainer.module.css";

const PortfolioContainer = () => {
  const portfolios = [
    {
      title: "Drafters King",
      subtitle:
        "Drafters king is a fantasy sports platform that allows users to play fantasy sports.",
    },
    {
      title: "IPPOS",
      subtitle:
        "Its an On-demand service app, where users can book an horse ride online.",
    },
    {
      title: "G-Alert",
      subtitle:
        "The concept of this app is to show nearby incident which happened in last 48hrs.",
    },
    {
      title: "E-Commerce",
      subtitle:
        "An application that brings all the international brands of clothing.",
    },
    {
      title: "ENVISION LLP",
      subtitle:
        "This portal allow Parents to purchase different courses for the children.",
    },
  ];
  return (
    <div id={"portfolio"} className={styles.root}>
      {portfolios?.map((portfolio, index) => {
        return (
          <Portfolio
            title={portfolio.title}
            subtitle={portfolio.subtitle}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default PortfolioContainer;
