import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import Navbar from "../navbar/Navbar";
import Sidebar from "../navbar/sidebar";
const SpecialCampaign = ({ setLoginUser }) => {
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
                            <h2 className="text-danger"><u>Special Campaign</u></h2>
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
                                <td>DCPC Special campaign for disposal of pending matters</td>
                                <td><a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Download</a></td>
                                <td>24/07/2018</td>
                            </tr>
                            <tr>
                                <td>Removal of scrap on 24.10.2021 from store room of the Department.</td>
                                <td><a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Download</a></td>
                                <td>12/04/2016</td>
                            </tr>
                            <tr>
                                <td>CIPET Special campaign for disposal of pending matters during the period 2nd October to 31st October, 2021 Photographs Part 1</td>
                                <td><a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Download</a></td>
                                <td>30/10/2015</td>
                            </tr>
                            <tr>
                                <td>Special campaign for disposal of pending matters during the period 2nd October to 31st October, 2021: Photographs Part 2</td>
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
export default SpecialCampaign;