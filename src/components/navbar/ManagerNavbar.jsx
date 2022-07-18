import React from "react";
import bootstrap from "bootstrap";
import { NavLink } from "react-router-dom";

const ManagerNavbar = () => {
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
                <NavLink className="nav-link" to={"/ManagerProfile"}>Profile</NavLink>
              </li>
              <li className="nav-item pe-2">
                <NavLink className="nav-link" to={"/MAllTeamMembers"}>All Team Leader</NavLink>
              </li>
              <li className="nav-item pe-2">
                <NavLink className="nav-link" to={"/MReports"}>Reports</NavLink>
              </li>

              <li className="nav-item dropdown pe-2">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Genrate Report
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="">
                <NavLink className="dropdown-item" to={"/GenrateMonthlyReport"}> Monthly Report</NavLink>
              </li>
              <li className="">
                <NavLink className="dropdown-item" to={"/GenrateAnualReport"}> Anual Report</NavLink>
              </li>
             
              </ul>
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
export default ManagerNavbar;