import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import {useLocation} from "react-router-dom";
import ManagerNavbar from "../navbar/ManagerNavbar";
const GenrateAnualReport = () =>{
    const navigate = useNavigate()
    const location = useLocation();
    const usermobile = localStorage.getItem('umobile');
    const [ user, setUser] = useState({
        year:""
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
       
    };

    const Add_Feedback = (event) => {
        event.preventDefault();
        axios.post("http://localhost:9002/anual_report_genrate", user)
        .then(res => {
            if(res.data.message!=0)
            {
            alert("Genrated Successful");
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
               <h1 className="h3 mb-3 fw-normal">Anual Report Genration</h1>
               <form onSubmit={Add_Feedback}>
               <div className="form-floating mb-3">
               <input type="date" className="form-control" name="year" value={user.year} onChange={handleChange} />
            
                    <label for="floatingInput">Year of Report</label>       
                </div>
                
                <button className="w-100 btn btn-lg btn-primary" type="submit">Genrate</button>
                </form>
                <div className="col-sm-4"></div>
            </div>
        </div>
        </div>
        </div>
    );

}
export default GenrateAnualReport;