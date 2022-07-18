import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import Navbar from "../navbar/Navbar";
import Sidebar from "../navbar/sidebar";
const TenderFinalized = ({ setLoginUser }) => {
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
                            <h2 className="text-danger"><u>Tender Finalized</u></h2>
                        
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
                                <td>Award of contract for providing of DLY Taxis in the department</td>
                                <td><a href={process.env.PUBLIC_URL+"/assets/1236.pdf"} download={"1236.pdf"}>Download</a></td>
                                <td>24/07/2018</td>
                            </tr>
                           
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );

}
export default TenderFinalized;