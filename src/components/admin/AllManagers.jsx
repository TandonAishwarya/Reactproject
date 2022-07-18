import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AllManagers = ({ setLoginUser }) => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:9002/allManagers");
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
            <AdminNavbar />
            <div className="row mt-1 p-1">
                <div className="col-sm-1 "></div>
                <div className="col-sm-3 " onClick={() => navigate("/AddManager")} ><button >Add Manager</button></div>

            </div>
            <div className="row mt-1 p-2">
                <div className="col-sm-1 "></div>
                <div className="col-sm-10">
                    <table className="table table-bordered">
                        <thead className=" table-dark table-hover">
                            <tr>
                                <td>sr</td>
                                <td>Name</td>
                                <td>Designation</td>
                                <td>Mobile No</td>
                                <td>Email</td>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.manager_name}</td>
                                    <td>{user.designation}</td>
                                    <td>{user.mobile_no}</td>
                                    <td>{user.email}</td>
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
export default AllManagers;