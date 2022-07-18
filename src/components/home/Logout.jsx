import React, {useState,useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom"
import axios from "axios";
import {useLocation} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import ManagerNavbar from "../navbar/ManagerNavbar";

const Logout = (props) => {
    
    const navigate = useNavigate()
    const location = useLocation();
  
    const loadUsers = async () => {
        localStorage.removeItem("umobile")    
                   navigate("/")
    };
   
    useEffect(() => {
        loadUsers();
      
    }, []);
    
    return (

        <React.Fragment >
        </React.Fragment>
    );
 
}
export default Logout;