import { makeStyles } from "@material-ui/core";
import React from "react";
import "../../../Styles/Footer.scss";
import logo_white from "../../../static/Logo/logo_noback_white.png";
const footerStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  grow: { flexGrow: 1 },
  growmid: { flexGrow: 0.02 },
}));

const Footer = (props) => {
  const classes = footerStyles();
  return (
    <footer className="footer-container">
      <div className="section">
        <img src={logo_white} width="27%" alt="footer-logo"/>
      </div>
      <div className="section">
      <button
        className="anchor footer"
          href={
            "https://www.figma.com/file/OVsnvi9o3kMydGTZ4SBwGt/DP2-Interfaces?node-id=25%3A2"
          }
          onClick={() => {}}
        >
          {"Poíticas de privacidad"}
        </button>
        <div className={classes.grow} />
        
        <div className={classes.grow} />
        <button
        className="anchor footer"
          href={
            "https://www.figma.com/file/OVsnvi9o3kMydGTZ4SBwGt/DP2-Interfaces?node-id=25%3A2"
          }
          onClick={() => {}}
        >
          {"Políticas de uso"}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
