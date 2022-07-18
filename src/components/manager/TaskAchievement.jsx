import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import {useLocation} from "react-router-dom";
import ManagerNavbar from "../navbar/ManagerNavbar";
const TaskAchievement = () =>{
    const navigate = useNavigate()
    const location = useLocation();
    const usermobile = localStorage.getItem('umobile');
    const [ user, setUser] = useState({
        id:"",
        completion:""
    })

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
        const {report_id} = location.state;
        console.log(report_id);
        setUser({
            ...user,
            id:report_id
        })
    };

    const Add_Feedback = (event) => {
        event.preventDefault();
        axios.post("http://localhost:9002/add_completion_report", user)
        .then(res => {
            if(res.data.message!=0)
            {
            alert("Added Successful");
            navigate("/MReports")
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
               <h1 className="h3 mb-3 fw-normal">Task Completion</h1>
               <form onSubmit={Add_Feedback}>
               <div className="form-floating mb-3">
               <input type="number" className="form-control" name="completion" value={user.completion} onChange={handleChange} />
            
                    <label for="floatingInput">Completion in Per</label>       
                </div>
                
                <button className="w-100 btn btn-lg btn-primary" type="submit">Add</button>
                </form>
                <div className="col-sm-4"></div>
            </div>
        </div>
        </div>
        </div>
    );

}
export default TaskAchievement;