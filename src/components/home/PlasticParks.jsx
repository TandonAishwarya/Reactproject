import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import Navbar from "../navbar/Navbar";
import Sidebar from "../navbar/sidebar";
const PlasticParks = ({ setLoginUser }) => {
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
                            <h2 className="text-danger"><u>Plastic Parks</u></h2>
                            <h3>Details of Plastic Parks</h3>
                        </div>
                        <table className="table table-bordered">
                            <thead className="table-danger"> 
                            <tr>
                                <th>Title</th>
                                <th>Details</th>
                                <th> Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Invitation for proposals for setting up of new Plastic parks under the Scheme of Setting up of Plastic Parks</td>
                                <td><a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Download</a></td>
                                <td>24/07/2018</td>
                            </tr>
                            <tr>
                                <td>Revised Scheme Guidelines for the scheme of setting up of Plastic Parks (November-2020)</td>
                                <td><a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Download</a></td>
                                <td>12/04/2016</td>
                            </tr>
                            <tr>
                                <td>Expression of Interest and Bid for appointment of Programme Manager for Scheme for Setting up of Plastic Parks</td>
                                <td><a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Download</a></td>
                                <td>30/10/2015</td>
                            </tr>
                            <tr>
                                <td>Scheme Guidelines for the scheme of setting up of Plastic Parks (June-2013)</td>
                                <td><a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Download</a></td>
                                <td>26/08/2000</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );

}
export default PlasticParks;