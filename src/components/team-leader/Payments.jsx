import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
import TeamLeaderNavbar from "../navbar/TeamLeaderNavbar";

const Payments = () => {
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
        axios.post("http://localhost:9002/get_payments", teammembermobile)
        .then(res => {
            setUser(res.data);
            })
        }
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
               
            </div>
            <div className="row mt-1 p-2">
                <div className="col-sm-1 "></div>
                <div className="col-sm-10">
                    <table className="table table-bordered">
                        <thead className=" table-dark table-hover">
                            <tr>
                                <td>sr</td>
                                <td>Paid Amount</td>
                                <td>Payment Date</td>
                              
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.amount}</td>
                                    <td>{user.payment_date}</td>
                                    
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
export default Payments;