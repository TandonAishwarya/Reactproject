import React, {useState,useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom"
import axios from "axios";
import {useLocation} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import ManagerNavbar from "../navbar/ManagerNavbar";

const ViewTeamMember = (props) => {
    const [users, setUser] = useState([]);

    const navigate = useNavigate()
    const location = useLocation();
    const usermobile = localStorage.getItem('umobile');
    const loadUsers = async () => {
        if(typeof usermobile == 'undefined' || usermobile == null )
        {
            navigate("/ManagerLogin");
        } 
        const {teammembermobile} = location.state;
        console.log(teammembermobile);
            const result = await axios.post("http://localhost:9002/viewteamleader",{'teammembermobile':teammembermobile});
            console.log(result);
        setUser(result.data);
    };
   
    useEffect(() => {
        loadUsers();
    }, []);
 if(users.length!=0){
    return (

        <React.Fragment >
            <ManagerNavbar umobile={users.mobile_no} />
            <div className="container bg-secondary ">
                <div className="row mt-5 p-5">
                    <div className="justify-content">
                        <h2 className="text-dark">Profile </h2>
                        <table>
                            <tr>
                            <th >Name :</th>
                            <th>{users.name}</th>
                            </tr>
                            <tr>
                            <th >Department :</th>
                            <th>{users.department}</th>
                            </tr>
                            <tr>
                            <th>Email :</th>
                            <th>{users.email}</th>
                            </tr>
                            <tr>
                            <th>Mobile:</th>
                            <th>{users.mobile_no}</th>
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
                            <th >Department :</th>
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
export default ViewTeamMember;