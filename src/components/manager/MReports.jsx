import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
import ManagerNavbar from "../navbar/ManagerNavbar";

const MReports = () => {
    const [users, setUser] = useState([]);
    const usermobile = localStorage.getItem('umobile');
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        if(typeof usermobile == 'undefined' || usermobile == null )
        {
            navigate("/ManagerLogin");
           // console.log("Empty");
        }
        const result = await axios.get("http://localhost:9002/TeamLeaderReports");
        console.log(result.data.reverse());
        setUser(result.data.reverse());
    };
    const deleteUser = async id => {
        // await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    };

    const navigate = useNavigate()

    return (
        <div>
            <ManagerNavbar />
            <div className="row mt-1 p-1">
                <div className="col-sm-1 "></div>
                
            </div>
            <div className="row mt-1 p-2">
                <div className="col-sm-1 "></div>
                <div className="col-sm-10">
                    <table className="table table-bordered">
                        <thead className=" table-dark table-hover">
                            <tr>
                                <td>sr</td>
                                <td>Department</td>
                                <td>Product Name</td>
                                <td>Raw Material</td>
                                <td>No Of Workers</td>
                                <td>Prouction Quntity</td>
                                <td>Date</td>
                                <td>Feedback</td>
                                <td>Completion %</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.department}</td>
                                    <td>{user.product_name}</td>
                                    <td>{user.raw_material}</td>
                                    <td>{user.no_of_worker}</td>
                                    <td>{user.production_quntity}</td>
                                    <td>{user.today_date}</td>
                                    <td>{user.feedback}</td>
                                    <td>{user.completion}</td>
                                    <td className="d-flex">
                                        <div className="pe-2">
                                        <Link className="btn btn-primary mr-3"  to='/AddFeedback' state={{ report_id: user._id }}>Add Feedback
                                            </Link>
                                        </div>
                                        <div className="pe-2">
                                        <Link className="btn btn-primary mr-3"  to='/TaskAchievement' state={{ report_id: user._id }}>Task Achievement
                                            </Link>
                                        </div>
                                    </td>
                                                              </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-1 "></div>
            </div>
        </div>
    );

}
export default MReports;