import React from "react";
import NavBar from "./NavBar";
import ScrollTop from "./ScrollTop";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Fab } from "@material-ui/core";
const NavBarWithScrollTopArrow = (props) => {
  const { auth, children } = props;
  //console.log("NAAAAV props:", props, auth);

  return (
    <>
      <React.Fragment>
        <NavBar auth={auth} {...props} />

        {children}

        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>
    </>
  );
};
export default NavBarWithScrollTopArrow;
