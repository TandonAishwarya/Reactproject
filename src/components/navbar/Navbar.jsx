import React, { Fragment } from "react";
import bootstrap from "bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
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
              <li className="nav-item pe-2">
                <NavLink className="nav-link" to={"/"}>Home</NavLink>
              </li>
              <li className="nav-item pe-2">
                <NavLink className="nav-link" to={"/About_department"}>About us</NavLink>
              </li>
              <li className="nav-item pe-2">
                <NavLink className="nav-link" to={"/Policies"}>Policies</NavLink>
              </li>
              <li className="nav-item dropdown pe-2">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="">
                <NavLink className="dropdown-item" to={"/Product_and_Applications"}> Product and Applications</NavLink>
              </li>
              <li className="">
                <NavLink className="dropdown-item" to={"/Specifications"}> Specifications</NavLink>
              </li>
              <li className="">
                <NavLink className="dropdown-item" to={"/Manufacturing_Process"}> Manufacturing Process</NavLink>
              </li>
              <li className="">
                <NavLink className="dropdown-item" to={"/Available_Product_Packing"}> Available Product Packing</NavLink>
              </li>
              <li className="">
                <NavLink className="dropdown-item" to={"/Quality_Control_infrastucture"}> Quality Control infrastucture</NavLink>
              </li>
             
              </ul>
            </li>

              <li className="nav-item dropdown pe-2">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Schemes</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="">
                <NavLink className="dropdown-item" to={"/PlasticParks"}> Plastic Parks</NavLink>
              </li>
              <li className="">
                <NavLink className="dropdown-item" to={"/CentresofExcellence"}> Centres of Excellence</NavLink>
              </li>
              <li className="">
                <NavLink className="dropdown-item" to={"/NationalPetrochemicalsAwards"}> NationalPetrochemicalsAwards</NavLink>
              </li>
              <li className="">
  <NavLink className="dropdown-item" to={"/ChemicalsPromotion"}> Chemicals Promotion Development Scheme</NavLink>
              </li>
             
              </ul>
            </li>

              <li className="nav-item pe-2">
                <NavLink className="nav-link" to={"/RTI"}>RTI</NavLink>
              </li>

              <li className="nav-item dropdown pe-2">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Trenders
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="">
                <NavLink className="dropdown-item" to={"/RecentTenders"}> Recent Tenders</NavLink>
              </li>
              <li className="">
                <NavLink className="dropdown-item" to={"/TenderFinalized"}> Tender Finalised</NavLink>
              </li>
             
              </ul>
            </li>

              <li className="nav-item dropdown pe-2">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Reports
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="">
                <NavLink className="dropdown-item" to={"/AnualReports"}> Anual Reports</NavLink>
              </li>
              <li className="">
                <NavLink className="dropdown-item" to={"/MonthlyReports"}> Monthly Reports</NavLink>
              </li>
             
              </ul>
            </li>

              <li className="nav-item dropdown ps-3">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Login
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="">
                <NavLink className="dropdown-item" to={"/TeamLeaderLogin"}> Team Leader</NavLink>
              </li>
              <li className="">
                <NavLink className="dropdown-item" to={"/ManagerLogin"}> Manager</NavLink>
              </li>
              {/* <li className="">
                <NavLink className="dropdown-item" to={"/Adminlogin"}> Admin</NavLink>
              </li> */}
              </ul>
            </li>
              
            </ul>
          </div>
        </div>
        </div>
      </nav>
    </div>
    </React.Fragment>
  );
}
export default Navbar;