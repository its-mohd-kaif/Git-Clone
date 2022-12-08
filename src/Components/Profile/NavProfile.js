import React from "react";
import logo from "./images/logo.png";
import "./NavProfile.css";

function NavProfile() {
  // Navbar Component
  return (
    <div>
      <div className="rowNavbar gridNavContainer">
        <div style={{ paddingBottom: "1em" }} className="column1Navbar gridNav">
          <img src={logo} alt="" />
        </div>
        <div className="column2Navbar gridNav">Pull requests</div>
        <div className="column3Navbar gridNav">Issues</div>
        <div className="column4Navbar gridNav">Codespaces</div>
        <div className="column5Navbar gridNav">Explore</div>
      </div>
    </div>
  );
}

export default NavProfile;
