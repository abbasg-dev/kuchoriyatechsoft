import React from "react";
import Collapsible from "react-collapsible";
import { useMediaQuery } from "react-responsive";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: 640px)`,
  });
  const [open, setOpen] = React.useState(false);
  const openCollapsible = () => {
    setOpen((prev) => !prev);
  };
  if (isMobile) {
    return (
      <nav className={styles.mobileNav}>
        <img src={"/logo.png"} width="120px" height="80px" />
        <div className={styles.sideBarTrigger} onClick={openCollapsible}>
          <div className={styles.triggerName}>Menu</div>
        </div>
        <Collapsible
          open={open}
          triggerStyle={{
            width: "70%",
            color: "red",
            backgroundColor: "#CD4A01",
          }}
          easing="ease"
        >
          <div
            className={`d-flex flex-column align-items-center ${styles.triggerItems}`}
          >
            <div className={styles.triggerItemFirst}>
              <a href="/">HOME</a>
            </div>
            <div className={styles.triggerItem}>
              <a href={"#services"}>SERVICES</a>
            </div>
            <div className={styles.triggerItem}>
              <a href={"#portfolio"}>PORTFOLIO</a>
            </div>
            <div className={styles.triggerItem}>
              <a href={"#testimonials"}>TESTIMONIALS</a>
            </div>
            <div className={styles.triggerItemLast}>
              <a href={"#contact-us"}>CONTACT US</a>
            </div>
          </div>
        </Collapsible>
        <style jsx>{`
          div div a {
            color: white;
          }
        `}</style>
      </nav>
    );
  }
  return (
    <nav>
      <ul>
        <li>
          <img src={"/logo.png"} width="120px" height="80px" />
        </li>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href={"#services"}>SERVICES</a>
        </li>
        <li>
          <a href={"#portfolio"}>PORTFOLIO</a>
        </li>
        <li>
          <a href={"#testimonials"}>TESTIMONIALS</a>
        </li>
        <li>
          <a href={"#contact-us"}>CONTACT US</a>
        </li>
      </ul>
      <style jsx>
        {`
          nav {
            text-align: center;
            justify-content: center;
            width: 70%;
            margin: 0 auto;
            margin-top: 40px;
            overflow: hidden;
          }
          nav ul {
            margin: 0;
            padding: 0;
            display: flex;
          }
          nav ul li {
            margin-top: auto;
            display: inline-block;
            list-style-type: none;
          }
          nav ul li a {
            display: inline-block;
            padding: 1em 0;
            text-decoration: none;
          }
          nav ul li:first-child {
            margin-right: auto;
          }
        `}
      </style>
    </nav>
  );
};

export default Navigation;
