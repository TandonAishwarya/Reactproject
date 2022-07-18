import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import {useLocation} from "react-router-dom";
import ManagerNavbar from "../navbar/ManagerNavbar";
import emailjs from '@emailjs/browser';

const AddTask = (props) =>{
    const navigate = useNavigate()
    const location = useLocation();
    const usermobile = localStorage.getItem('umobile');
    const [ user, setUser] = useState({
        mobile_no:"",
        product_name:"",
        quntity:"",
        no_of_worker:"",
        department:"",
        assignment_date:""
    })
    const[ teamMember,setTeamMember] = useState({});

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const loadUsers = async () => {
        if(typeof usermobile == 'undefined' || usermobile == null )
        {
            navigate("/ManagerLogin");
           // console.log("Empty");
        }
        const {teammembermobile} = location.state;   
        axios.post("http://localhost:9002/viewteamleader",{teammembermobile:teammembermobile})
        .then(res => {
                setTeamMember(res.data);
                console.log(res.data.email)
        })  
        setUser({
            ...user,
            mobile_no: teammembermobile
        })
    };

    const Add_Feedback = (event) => {
        event.preventDefault();
        axios.post("http://localhost:9002/add_task", user)
        .then(res => {
            if(res.data.message!=0)
            {
            alert("Added Successful");
        
            emailjs.send("service_ns527x1","template_dy858yp",{
                from_name: "Production Management",
                message: `Task Details - Product Name : ${user.product_name} , Department : ${user.department} , No Of Worker : ${user.no_of_worker} , Quntity : ${user.quntity} , Assignment date : ${user.assignment_date}`,
                to_email: teamMember.email,
                },'joCHt3Cx4Mt5ZM56R');
        
                navigate("/MAllTeamMembers")
            }
            else{
                alert("Please Try again");
            }
        });
    }

    useEffect(() => {
        loadUsers();
      
    }, []);

    return (
        <div>
    <ManagerNavbar/>
    <div className="text-center Add_manger">
        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
               <h1 className="h3 mb-3 fw-normal">Assign Task</h1>
               <form onSubmit={Add_Feedback}>
               <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="product_name" value={user.product_name} onChange={handleChange} id="floatingInput" placeholder="Product Name" required/>
                    <label for="floatingInput">Product Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="department" value={user.department} onChange={handleChange} id="floatingInput" placeholder="Department" required/>
                    <label for="floatingInput">Department Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="no_of_worker" value={user.no_of_worker} onChange={handleChange} id="floatingInput" placeholder="Total worker" required/>
                    <label for="floatingInput">Total worker</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="quntity" value={user.quntity} onChange={handleChange} id="floatingInput" placeholder="Quntity" required/>
                    <label for="floatingInput">quntity</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="date" className="form-control" name="assignment_date" value={user.assignment_date} onChange={handleChange} id="floatingInput" placeholder="Assignment Date" required/>
                    <label for="floatingInput">Assignment Date</label>
                </div>
               
                
                <button className="w-100 btn btn-lg btn-primary" type="submit">Assign</button>
                </form>
                <div className="col-sm-4"></div>
            </div>
        </div>
        </div>
        </div>
    );

}
export default AddTask;