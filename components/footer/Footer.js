import style from "./Footer.module.css";

import React from "react";

const Footer = () => {
  return (
    <div className={style.footerGridContainer} id={"contact-us"}>
      <div className={"row"}>
        <div className={"col-md-5"}>
          Kuchoriya is an ISO 9001:2015 Certified Company with its physical
          presence in the US, India and Australia and serving its clients across
          the globe.
          <div className={style.copyright}>
            © {new Date().getFullYear()} Kuchoriya Softwares All Rights Reserved
          </div>
        </div>
        <div className={"col-md-4 " + style.centerMobile}>
          <div className={"row"}>
            <div className={"col-md-1"}>
              <img src={"/location.svg"} />
            </div>
            <div className={"col-md-8"}>
              118, JLT Cluster V,
              <br />
              AI Sarayat St, opposite Damas jewellery,
              <br />
              Dubai United Arab Emirates
              <br />
              Dubai 91929
            </div>
          </div>
          <div className={"row"} style={{ paddingTop: 10 }}>
            <div className={"col-md-1"}>
              <img src={"/telefone.svg"} />
            </div>
            <div className={"col-md-8"}>+1 650 488 7911 | +91 77370 26735</div>
          </div>
          <div className={"row"} style={{ paddingTop: 10 }}>
            <div className={"col-md-1"}>
              <img src={"/email.svg"} />
            </div>
            <div className={"col-md-8"}>info@kuchoriyasoftwares.com</div>
          </div>
        </div>
        <div className={"col-md-2 " + style.footerCol3}>
          <img src={"/logo.png"} width="150px" height="110px" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
