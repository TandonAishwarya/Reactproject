import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import Navbar from "../navbar/Navbar";
import Sidebar from "../navbar/sidebar";
const InternationalYogaDay = ({ setLoginUser }) => {
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
                            <h2 className="text-danger"><u>International Yoga Day</u></h2>
                        </div>
                        <table className="table table-bordered">
                            <thead className="table-danger"> 
                            <tr>
                                <th>Title</th>
                                <th>URL</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>International Yoga Day</td>
                                <td><a href={"https://yoga.ayush.gov.in/public/assets/front/pdf/CYPEnglishLeaflet.pdf"}>https://yoga.ayush.gov.in/public/assets/front/pdf/CYPEnglishLeaflet.pdf</a></td>
                            </tr>
                            <tr>
                                <td>International Yoga Day 2022 Google Drive</td>
                                <td><a href={"https://drive.google.com/drive/folders/1AOzFwYVrKDS9DxqiuCMuCvjEOuE3gDfQ"}>https://drive.google.com/drive/folders/1AOzFwYVrKDS9DxqiuCMuCvjEOuE3gDfQ</a></td>
                            </tr>
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );

}
export default InternationalYogaDay;