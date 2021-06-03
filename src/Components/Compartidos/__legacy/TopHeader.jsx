import React from "react";

const TopHeader = (props) => {

  return (
      <div className="header-top">
        <div className="left-top ">
          <ul>
            <li><i className="fas fa-map-marker-alt top-icon" />123, washington street, uk</li>
            <li><i className="fas fa-phone-volume top-icon" />+19 123-456-7890</li>
            <li><i className="fas fa-envelope top-icon" />mail@yourdomain.com</li>
          </ul>
        </div>
        <div className="right-top ">
          <ul>
            <li><i className="fab fa-facebook-f top-icons" />
            </li>
            <li><i className="fab fa-instagram top-icons" />
            </li>
            <li><i className="fab fa-linkedin-in top-icons" />
            </li>
            <li><i className="fab fa-twitter top-icons" />
            </li>
          </ul>
        </div>
      </div>
  );
};

export default TopHeader;
