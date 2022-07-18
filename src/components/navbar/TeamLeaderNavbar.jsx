import React from "react";
import bootstrap from "bootstrap";
import { NavLink } from "react-router-dom";

const TeamLeaderNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-fluid">
        <NavLink className="navbar-brand ps-3 d-flex" to={"/"}><img className="pe-3" src="assets/logo.png" height="60" /> DEPARTMENT OF CHEMICALS &<br /> PETRO-CHEMICALS</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex pe-5">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active pe-2">
                <NavLink className="nav-link" to={"/"}>Home</NavLink>
              </li>
              <li className="nav-item active pe-2">
                <NavLink className="nav-link" to={"/TeamLeaderProfile"}>Profile</NavLink>
              </li>
              <li className="nav-item pe-2">
                <NavLink className="nav-link" to={"/TeamLeaderReports"}>Reports</NavLink>
              </li>
              <li className="nav-item pe-2">
                <NavLink className="nav-link" to={"/Tasks"}>Tasks</NavLink>
              </li>
              <li className="nav-item pe-2">
                <NavLink className="nav-link" to={"/Payments"}>Payments</NavLink>
              </li>
              <li className="nav-item pe-2">
                <NavLink className="nav-link" to={"/Performance_analysis"}>Analysis </NavLink>
              </li>
              <li className="nav-item pe-2">
                <NavLink className="nav-link" to={"/Logout"}> Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </nav>
    </div>
  );
}
export default TeamLeaderNavbar;