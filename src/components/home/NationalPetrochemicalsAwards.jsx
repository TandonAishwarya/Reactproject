import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import Navbar from "../navbar/Navbar";
import Sidebar from "../navbar/sidebar";
const NationalPetrochemicalsAwards = ({ setLoginUser }) => {
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
                            <h2 className="text-danger"><u>National Petrochemicals Awards</u></h2>
                            <h3>List of Awardees of previous National Awards</h3>
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
                                <td>Invitation of applications for the 11th National Petrochemicals Awards</td>
                                <td><a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Download</a></td>
                                <td>24/07/2018</td>
                            </tr>
                            <tr>
                                <td>Revised Guidelines for National Petrochemical Awards</td>
                                <td><a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Download</a></td>
                                <td>12/04/2016</td>
                            </tr>
                            <tr>
                                <td>10th National Award Booklet</td>
                                <td><a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Download</a></td>
                                <td>30/10/2015</td>
                            </tr>
                            <tr>
                                <td>10th National Awards for Technology Innovation - Implementation</td>
                                <td><a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Download</a></td>
                                <td>26/08/2000</td>
                            </tr>
                            <tr>
                                <td>9th National Award Booklet</td>
                                <td><a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Download</a></td>
                                <td>26/08/2000</td>
                            </tr>
                            <tr>
                                <td>8th National Award Booklet</td>
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
export default NationalPetrochemicalsAwards;