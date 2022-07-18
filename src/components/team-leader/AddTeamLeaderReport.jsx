import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import TeamLeaderNavbar from "../navbar/TeamLeaderNavbar";

import emailjs from '@emailjs/browser';
const AddTeamLeaderReport = ({setLoginUser}) =>{
    const navigate = useNavigate()
    const teammembermobile = localStorage.getItem('umobile'); 
    const [ user, setUser] = useState({
        mobile_no:"",
        department:"",
        no_of_worker:"",
        production_quntity:"",
        today_date:"",
        product_name:"",
        raw_material:""
    })
    const [product_details, setProductDetails] = useState({});
    const[ manager,setManager] = useState({});

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const handleproductChange = (e) =>
    {

    }
    const Add_Team_Leader = (event) => {
        event.preventDefault();
        axios.post("http://localhost:9002/add_team_leader_report", user)
        .then(res => {
            alert("Added Successfully");
            emailjs.send("service_ns527x1","template_dy858yp",{
                from_name: "Production Management",
                message: `Report - Department : ${user.department} , Product Name : ${user.product_name} ,
                Raw Material : ${user.raw_material} ,
                Quntity : ${user.production_quntity} ,
                No of Worker : ${user.no_of_worker},
                Report Date: ${user.today_date},
                `,
                to_email:manager.email,
                },'joCHt3Cx4Mt5ZM56R');
            navigate("/TeamLeaderReports")
        })
    }
    const loadProducts = () => {
        if(typeof teammembermobile == 'undefined' || teammembermobile == null )
        {
            navigate("/TeamLeaderLogin");
           // console.log("Empty");
        }
        setUser({
            ...user,
            mobile_no:teammembermobile
        })
        axios.get("http://localhost:9002/allProducts")
            .then( res => {
                
                setProductDetails(res.data)
            })
           
            axios.post("http://localhost:9002/viewmanager")
            .then(res => {
                    setManager(res.data);
               
            })  
           
       
    }

    useEffect(() => {
        loadProducts();
        
      }, []);
    return (
        <div>
    <TeamLeaderNavbar/>
  
    <div className="text-center Add_manger">
        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
               <h1 className="h3 mb-3 fw-normal">Add Todays Report</h1>
               <form onSubmit={Add_Team_Leader}>
       
               <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="department" value={user.department} onChange={handleChange} id="floatingInput" placeholder="Department" required/>
                    <label for="floatingInput">Department Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="product_name" value={user.product_name} onChange={handleChange} id="floatingInput" placeholder="Product Name" required/>
                    <label for="floatingInput">Product Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="raw_material" value={user.raw_material} onChange={handleChange} id="floatingInput" placeholder="Raw Material" required/>
                    <label for="floatingInput">Raw Material</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="no_of_worker" value={user.no_of_worker} onChange={handleChange} id="floatingInput" placeholder="No Of Worker"required/>
                    <label for="floatingInput">No of Worker</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="production_quntity" value={user.production_quntity} onChange={handleChange} id="floatingInput" placeholder="Production Quntity" required/>
                    <label for="floatingInput">Production Quntity</label>
                </div>
                <div className="form-floating mb-3">
                   Date <input type="date" className="form-control" name="today_date" value={user.today_date} onChange={handleChange} id="floatingInput" placeholder="Date"required/>
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
export default AddTeamLeaderReport;