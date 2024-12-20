import Footer from "./footer/Footer";
import React from "react";
import Navigation from "./navigation/Navigation";

const Layout = (props) => {
    return (
        <>
            <Navigation/>
            <div>
                {props.children}
            </div>
            <Footer/>
        </>
    )
}
export default Layout;