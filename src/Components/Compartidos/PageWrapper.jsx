import React from "react";

import "../../Styles/PageWrapper.scss";
import Footer from "./Footer/Footer";
import NavBarWithScrollTopArrow from "./NavBar/NavBarWithScrollTopArrow";
import TopHeader from "./TopHeader/TopHeader";

const PageWrapper = (props) => {
  const { children } = props;
  return (
    <div className="main-wrapper">
      <NavBarWithScrollTopArrow {...props}>
        <div className="sub-header-container">

          <TopHeader {...props} />

          <div className="body" >{children}</div>
          <Footer {...props} />
        </div>
      </NavBarWithScrollTopArrow>
    </div>
  );
};

export default PageWrapper;
