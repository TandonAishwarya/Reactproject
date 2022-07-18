import React from "react";
import bootstrap from "bootstrap";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
<React.Fragment>
<nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-fluid">
        <NavLink className="navbar-brand ps-3 d-flex" to={"/"}><img className="pe-3" src="assets/logo.png" height="60" /> DEPARTMENT OF CHEMICALS &<br /> PETRO-CHEMICALS</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex pe-5">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active pe-3">
                    <NavLink className={"nav-link"} to="/AdminProfile">Profile</NavLink>
                    </li>
                <li className="nav-item pe-3">
                <NavLink className={"nav-link"} to="/AllManagers">All MAnagers</NavLink>
                    </li>
                <li className="nav-item pe-3">
                <NavLink className={"nav-link"} to="/AllTeamLeaders">All Team Leaders </NavLink>
                    </li>
                <li className="nav-item pe-3">
                <NavLink className={"nav-link"} to="/AdminLogout">Logout</NavLink>
                   </li>
                </ul>
            </div>
            </div>
            </div>
</nav>

</React.Fragment>
  );
}
export default AdminNavbar;