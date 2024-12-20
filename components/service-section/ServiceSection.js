import ServiceCard from "./service-card/ServiceCard";
import React from "react";
import style from "./ServiceSection.module.css";

const ServiceSection = () => {
  return (
    <div className={style.serviceCardContainerRoot}>
      <div className={style.serviceCardContainer}></div>
      <ServiceCard
        title={"Blockchain Development"}
        image={"/blockchain.png"}
        description={
          "Our blockchain knowledge is unmatched, from developing Smart Contracts to creating decentralized apps."
        }
      />
      <ServiceCard
        title={"Web Development"}
        image={"/web-dev.png"}
        description={
          "Custom mobile app solutions for all platforms and devices can revolutionize your business."
        }
      />
      <ServiceCard
        title={"Mobile Apps"}
        image={"/mobile-dev.png"}
        description={
          "Custom mobile app solutions for all platforms and devices can revolutionize your business."
        }
      />
      <ServiceCard
        title={"Digital Marketing"}
        image={"/marketing.png"}
        description={
          "We provide comprehensive digital marketing services that help businesses increase online visibility, drive traffic, and generate leads and sales."
        }
      />
    </div>
  );
};
export default ServiceSection;
