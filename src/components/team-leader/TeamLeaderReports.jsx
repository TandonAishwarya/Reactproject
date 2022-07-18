import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
import TeamLeaderNavbar from "../navbar/TeamLeaderNavbar";

const TeamLeaderReports = () => {
    const [users, setUser] = useState([]);
    const teammembermobile = localStorage.getItem('umobile'); 
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        if(typeof teammembermobile == 'undefined' || teammembermobile == null )
        {
            navigate("/TeamLeaderLogin");
           // console.log("Empty");
        }
        const result = await axios.post("http://localhost:9002/TeamLeaderReports_m",{'mobile_no':teammembermobile});
        setUser(result.data.reverse());
    };
    const deleteUser = async id => {
        // await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    };

    const navigate = useNavigate()

    return (
        <div>
            <TeamLeaderNavbar />
            <div className="row mt-1 p-1">
                <div className="col-sm-1 "></div>
                <div className="col-sm-3 " onClick={() => navigate("/AddTeamLeaderReport")} ><button >Add Report</button></div>

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
export default TeamLeaderReports;