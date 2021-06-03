import React from "react"; //, { useRef, useState } //useEffect,
import {
  AppBar,
  CssBaseline,
  Link,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";
import logo from "./../../../static/Logo/logo.svg";
import "../../../Styles/NavBar.scss";
const avatarUrl = "https://picturepan2.github.io/spectre/img/avatar-2.png";

const navBarStyles = makeStyles((theme) => ({
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
  growmid: { flexGrow: 0.05 },
}));

const logoStyles = makeStyles((theme) => ({
  largeLogo: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const NavBar = (props) => {
  const { navegacion } = props;
  const classes = logoStyles();
  const classesNavBar = navBarStyles();

  const redirect = (path) => {
    //window.location.replace("/jp");
    console.log("Redicreccion desde NavBar");
    props.history.push(`${path}`);
  };
  const onNavigateHome = () => {
    window.location.replace("/");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickAvatarMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAvatarMenu = () => {
    setAnchorEl(null);
  };
  const listaNavegacionLocal = navegacion || [];
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar style={{ backgroundColor: "#fff" }}>
          <div className={classesNavBar.sectionMobile}>
            <IconButton
              aria-label="delete"
              color="primary"
              className={classes.margin}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </div>

          <div className={classesNavBar.sectionDesktop}>
            <div className={classesNavBar.growmid} />
          </div>
          <img
            className="logo"
            alt="TEMP SSISDEU_logo"
            src={logo}
            onClick={onNavigateHome}
          />
          <div className={classesNavBar.growmid} />
          {listaNavegacionLocal &&
            listaNavegacionLocal.map((navegacionItem, index) => (
              <>
                {" "}
                <div key={index} className={classesNavBar.sectionDesktop}>
                  <Link
                    key={index + 1}
                    style={{ cursor: "pointer" }}
                    onClick={(path) => redirect(navegacionItem.path)}
                  >
                    {navegacionItem.label}
                  </Link>
                </div>
                <div key={index + 2} className={classesNavBar.growmid} />
              </>
            ))}

          <div className={classesNavBar.grow} />
          <div className={classesNavBar.growmid} />
          {listaNavegacionLocal && listaNavegacionLocal.lenght > 0 && (
            <>
              <img
                className="avatar"
                alt="user"
                src={avatarUrl}
                onClick={handleClickAvatarMenu}
              />
              <IconButton
                aria-haspopup="true"
                color="primary"
                onClick={handleClickAvatarMenu}
                className={classes.margin}
              >
                <ExpandMoreIcon fontSize="small" />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseAvatarMenu}
              >
                <MenuItem key={1} onClick={handleCloseAvatarMenu}>
                  Perfil
                </MenuItem>
                <MenuItem key={2} onClick={handleCloseAvatarMenu}>
                  Cerrar sesión
                </MenuItem>
              </Menu>
            </>
          )}

          <div className={classesNavBar.growmid} />
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
};
export default withRouter(NavBar);
