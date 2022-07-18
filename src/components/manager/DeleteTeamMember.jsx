import React, {useState,useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom"
import axios from "axios";
import {useLocation} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import ManagerNavbar from "../navbar/ManagerNavbar";

const DeleteTeamMember = (props) => {
    
    const navigate = useNavigate()
    const location = useLocation();
    const usermobile = localStorage.getItem('umobile');
    const loadUsers = async () => {
     //   const usermobile = localStorage.getItem('umobile');     
     if(typeof usermobile == 'undefined' || usermobile == null )
        {
            navigate("/ManagerLogin");
           // console.log("Empty");
        }
        const {teammembermobile} = location.state;
        console.log(teammembermobile);
        const result="" ;
             await axios.post("http://localhost:9002/deleteteamleader",{'teammembermobile':teammembermobile}).then(res => {
                
                if(res.data.message!=0)
                {
                alert("Deleted Successfully");
                navigate("/MAllTeamMembers")
                }
                else{
                    alert("Please Try again");
                    navigate("/MAllTeamMembers")
                }
              })
          //  console.log(result);
        //setUser(result.data);
        //console.log(users._id)
        
       
    };
   
    useEffect(() => {
        loadUsers();
      
    }, []);
    
    return (

        <React.Fragment >
        </React.Fragment>
    );
 
}
export default DeleteTeamMember;