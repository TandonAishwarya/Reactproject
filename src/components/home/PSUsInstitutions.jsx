import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import Navbar from "../navbar/Navbar";
import Sidebar from "../navbar/sidebar";
const PSUsInstitutions = ({ setLoginUser }) => {
    const navigate = useNavigate()
    return (
        <React.Fragment>

            <Navbar />
            <div>
                <img src="assets/inner-banner01.jpg" alt="" />
            </div>
            <div className="container text-start">
                <div className="row mt-5 d-flex">
                <div className="col-sm-2 ">
                    <Sidebar/>
                    </div>
                    <div className="col-sm-10 ">
                        <div className="">
                            <h2 className="text-danger"><u>PSUs Institutions</u></h2>
                        </div>
                        <div>
                            <h6>Autonomous Institutions/PSUs</h6>
                            <p>                     
                             <ul>
                            <li>
                            <a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Institute of Pesticides Formulation Technology(IPFT)</a>
                            </li>
                            <li>
                            <a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Central Institute of Petrochemicals Engineering & Technology(CIPET)</a>
                            </li>
                        </ul>

                        </p>
                        </div>
                        <div>
                            <h6>PSUs</h6>
                            <p>                     
                             <ul>
                            <li>
                            <a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Hindustan Organic Chemicals Ltd(HOCL)</a>
                            </li>
                            <li>
                            <a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>HIL (India) Limited(HIL)</a>
                            </li>
                            <li>
                            <a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Hindustan Fluorocarbons Limited (HFL)</a>
                            </li>
                        </ul>

                        </p>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );

}
export default PSUsInstitutions;