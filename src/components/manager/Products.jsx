import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import ManagerNavbar from "../navbar/ManagerNavbar";

const Products = ({ setLoginUser }) => {
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
        const result = await axios.get("http://localhost:9002/allProducts");
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
                    <Link className="btn btn-info mb-2" to={"/addProduct"}>Add Product</Link>
                    <table className="table table-bordered">
                        <thead className=" table-dark table-hover">
                            <tr>
                                <td>sr</td>
                                <td>Product Name</td>
                                <td>Raw Material</td>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.product_name}</td>
                                    <td>{user.raw_material}</td>
                                    
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
export default Products;