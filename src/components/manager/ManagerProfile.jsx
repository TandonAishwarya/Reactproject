import React, {useState,useEffect,useLayoutEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom"
import {useLocation} from 'react-router-dom';
import axios from "axios";
import Navbar from "../navbar/Navbar";
import ManagerNavbar from "../navbar/ManagerNavbar";

const ManagerProfile = (props) => {
    const [users, setUser] = useState([]);

    const navigate = useNavigate()
  
    const loadUsers = async () => {
        const usermobile = localStorage.getItem('umobile');     
        if(typeof usermobile == 'undefined' || usermobile == null )
        {
            navigate("/ManagerLogin");
           // console.log("Empty");
        }
            const result = await axios.get("http://localhost:9002/managerprofile", usermobile);
            console.log(result.data.reverse());
        setUser(result.data.reverse());
    };
   
    useEffect(() => {
        loadUsers();
    }, []);
 if(users.length!=0){
    return (

        <React.Fragment >
            <ManagerNavbar umobile={users[0].mobile} />
            <div className="container bg-secondary ">
                <div className="row mt-5 p-5">
                    <div className="justify-content">
                        <h2 className="text-dark">Profile </h2>
                        <table>
                            <tr>
                            <th >Name :</th>
                            <th>{users[0].manager_name}</th>
                            </tr>
                            <tr>
                            <th >Designation :</th>
                            <th>{users[0].designation}</th>
                            </tr>
                            <tr>
                            <th>Email :</th>
                            <th>{users[0].email}</th>
                            </tr>
                            <tr>
                            <th>Mobile:</th>
                            <th>{users[0].mobile_no}</th>
                            </tr>
                           
                        </table>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
 }
 else{
    return (

        <React.Fragment >
            <ManagerNavbar />
            <div className="container bg-secondary ">
                <div className="row mt-5 p-5">
                    <div className="justify-content">
                        <h2 className="text-dark">Profile </h2>
                        <table>
                            <tr>
                            <th >Name :</th>
                            <th></th>
                            </tr>
                            <tr>
                            <th >Designation :</th>
                            <th></th>
                            </tr>
                            <tr>
                            <th>Email :</th>
                            <th></th>
                            </tr>
                            <tr>
                            <th>Mobile:</th>
                            <th></th>
                            </tr>
                           
                        </table>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
 }

}
export default ManagerProfile;