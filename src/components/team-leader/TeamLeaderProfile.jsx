import React, { useState, useEffect, useLayoutEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import axios from "axios";
import Navbar from "../navbar/Navbar";
import ManagerNavbar from "../navbar/ManagerNavbar";
import TeamLeaderNavbar from "../navbar/TeamLeaderNavbar";
import './profile.css';
import Footer from "../navbar/Footer";

const TeamLeaderProfile = (props) => {
    const [users, setUser] = useState([]);
    const navigate = useNavigate()

    const loadUsers = async () => {
        const teammembermobile = localStorage.getItem('umobile');

        if(typeof teammembermobile == 'undefined' || teammembermobile == null )
        {
            navigate("/TeamLeaderLogin");
           // console.log("Empty");
        }
        const result = await axios.post("http://localhost:9002/teamleaderprofile", { 'teammembermobile': teammembermobile });
        console.log(result);
        setUser(result.data);
    };

    useEffect(() => {
        loadUsers();
    }, []);
    if (users.length != 0) {
        return (

            <React.Fragment >
                <TeamLeaderNavbar umobile={users.mobile_no} />
                <div>
                <img src="assets/inner-banner01.jpg" alt="" />
            </div>

                <div className="page-content page-container" id="page-content">
                    <div className="padding">
                        <div className="row container d-flex justify-content-center">
                            <div className="col-xl-6 col-md-12">
                                <div className="card user-card-full">
                                    <div className="row m-l-0 m-r-0">
                                        <div className="col-sm-4 bg-c-lite-green user-profile">
                                            <div className="card-block text-center text-white">
                                                <div className="m-b-25">
                                                    <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
                                                </div>
                                                <h6 className="f-w-600">{users.name}</h6>
                                                <p>{users.mobile_no}</p>
                                                <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="card-block">
                                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600">Email</p>
                                                        <h6 className="text-muted f-w-400">{users.email}</h6>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600">Phone</p>
                                                        <h6 className="text-muted f-w-400">{users.mobile_no}</h6>
                                                    </div>
                                                </div>
                                               
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600">Department</p>
                                                        <h6 className="text-muted f-w-400">{users.department}</h6>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600"></p>
                                                        <h6 className="text-muted f-w-400"></h6>
                                                    </div>
                                                </div>
                                                <ul className="social-link list-unstyled m-t-40 m-b-10">
                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            <Footer/>
            </React.Fragment>
        );
    }
    else {
        return (

            <React.Fragment >
                <TeamLeaderNavbar />
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
export default TeamLeaderProfile;