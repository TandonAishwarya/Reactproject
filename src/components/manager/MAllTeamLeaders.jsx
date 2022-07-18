import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import ManagerNavbar from "../navbar/ManagerNavbar";

const MAllTeamLeaders = ({ setLoginUser }) => {
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
        const result = await axios.get("http://localhost:9002/allTeamLeaders");
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
                {/* <div className="col-sm-3 " onClick={() => navigate("/AddTeamLeader")} ><button >Add Team Leader</button></div> */}
           </div>
            <div className="row mt-1 p-2">
                <div className="col-sm-1 "></div>
                <div className="col-sm-10">
                    <table className="table table-bordered">
                        <thead className=" table-dark table-hover">
                            <tr>
                                <td>sr</td>
                                <td>Name</td>
                                <td>Department</td>
                                <td>Mobile No</td>
                                <td>Email</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.department}</td>
                                    <td>{user.mobile_no}</td>
                                    <td>{user.email}</td>
                                    <td className="d-flex">
                                        <div className="pe-2">
                                        <Link className="btn btn-primary mr-3"  to='/ViewTeamMember' state={{ teammembermobile: user.mobile_no }}>View
                                            </Link>
                                        </div>
                                        <div className="pe-2">
                                            <Link className="btn btn-outline-primary mr-2 pe-2" to='/EditTeamMember' state={{ teammembermobile: user.mobile_no }} >
                                                Edit
                                            </Link>
                                        </div>
                                        <div className="">
                                            <Link className="btn btn-danger mr-2 pe-2" to='/DeleteTeamMember' state={{ teammembermobile: user.mobile_no }}>
                                                Delete
                                            </Link>

                                        </div>
                                        <div className="pe-2">
                                            <Link className="btn btn-outline-warning mr-2 pe-2" to='/AddTask' state={{ teammembermobile: user.mobile_no }} >
                                                Assign Task
                                            </Link>
                                        </div>
                                        <div className="pe-2">
                                            <Link className="btn btn-outline-success mr-2 pe-2" to='/AddPayment' state={{ teammembermobile: user.mobile_no }} >
                                                Add Payment
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
export default MAllTeamLeaders;