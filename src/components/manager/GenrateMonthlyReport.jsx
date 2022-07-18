import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import {useLocation} from "react-router-dom";
import ManagerNavbar from "../navbar/ManagerNavbar";
const GenrateMonthlyReport = () =>{
    const navigate = useNavigate()
    const location = useLocation();
    const usermobile = localStorage.getItem('umobile');
    const [ user, setUser] = useState({
        month:""
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
       
        
    };

    const Add_Feedback = (event) => {
        event.preventDefault();
        axios.post("http://localhost:9002/monthly_report_genrate", user)
        .then(res => {
            if(res.data.message!=0)
            {
            alert("Genratd Successful");
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
               <h1 className="h3 mb-3 fw-normal">Monthly Report Genration</h1>
               <form onSubmit={Add_Feedback}>
               <div className="form-floating mb-3">
               <input type="date" className="form-control" name="month" value={user.month} onChange={handleChange} />
            
                    <label for="floatingInput">Month of Report</label>       
                </div>
                {/* <div className="form-floating mb-3">Month
                <select className="me-5 ms-2" name="month" onChange={handleChange}>
                                    <option>Select Month</option>
                                    <option value={"01"}>01</option>
                                    <option value={"02"}>02</option>
                                    <option value={"03"}>03</option>
                                    <option value={"04"}>04</option>
                                    <option value={"05"}>05</option>
                                    <option value={"06"}>06</option>
                                    <option value={"07"}>07</option>
                                    <option value={"08"}>08</option>
                                    <option value={"09"}>09</option>
                                    <option value={"10"}>10</option>
                                    <option value={"11"}>11</option>
                                    <option value={"12"}>12</option>
                                </select>      
                </div> */}
                
                <button className="w-100 btn btn-lg btn-primary" type="submit">Genrate</button>
                </form>
                <div className="col-sm-4"></div>
            </div>
        </div>
        </div>
        </div>
    );

}
export default GenrateMonthlyReport;