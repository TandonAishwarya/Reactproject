import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import Navbar from "../navbar/Navbar";
import Sidebar from "../navbar/sidebar";
const RecentTenders = ({ setLoginUser }) => {
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
                            <h2 className="text-danger"><u>Recent Tenders</u></h2>
                        
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
                                <td>Award of rate contract for Dry-cleaning work in the Department of Chemicals and Petrochemicals</td>
                                <td><a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Download</a></td>
                                <td>24/07/2018</td>
                            </tr>
                            <tr>
                                <td>Industry facilitation cell at DCPC</td>
                                <td><a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Download</a></td>
                                <td>12/04/2016</td>
                            </tr>
                            <tr>
                                <td>Expression of Interest and Bid for appointment of Programme Manager for Scheme for Setting up of Plastic Parks</td>
                                <td><a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Download</a></td>
                                <td>30/10/2015</td>
                            </tr>
                            <tr>
                                <td>Disposal of inserviceable and obsolete furniture and fixture, electrical equipments, shredder machine etc. and computers, printers, scanners photocopier machines telephones (e-waste) of Chemicals and Petrochemicals reg.</td>
                                <td><a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Download</a></td>
                                <td>26/08/2000</td>
                            </tr>
                            <tr>
                                <td>Award of contract for maintenance of telephone line in the Department of Chemicals and Petrochemicals</td>
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
export default RecentTenders;