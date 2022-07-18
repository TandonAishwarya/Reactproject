import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import AdminNavbar from "./AdminNavbar";
const AddTeamLeader = ({setLoginUser}) =>{
    const navigate = useNavigate()
    const [ user, setUser] = useState({
        name:"",
        department:"",
        mobile_no:"",
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const Add_Team_Leader = (event) => {
        event.preventDefault();
        axios.post("http://localhost:9002/add_team_leader", user)
        .then(res => {
            alert(res.data.message);
            console.log(res.data.user);
            setLoginUser(res.data.user)
            navigate("/AllTeamLeaders")
        })
    }

    return (
        <div>
    <AdminNavbar/>
    <div className="text-center Add_manger">
        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
               <h1 className="h3 mb-3 fw-normal">Add Team Leader</h1>
               <form onSubmit={Add_Team_Leader}>
               <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="name" value={user.name} onChange={handleChange} id="floatingInput" placeholder="Name" pattern="[a-zA-Z]{1,15}" required/>
                    <label for="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="department" value={user.department} onChange={handleChange} id="floatingInput" placeholder="Designation" pattern="[a-zA-Z]{1,15}" required/>
                    <label for="floatingInput">Department</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange} id="floatingInput" placeholder="name@example.com" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}" required/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="mobile_no" value={user.mobile_no} onChange={handleChange} id="floatingInput" placeholder="Mobile Number" pattern="[789][0-9]{9}" required/>
                    <label for="floatingInput">Mobile Number</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" name="password" value={user.password} onChange={handleChange} id="floatingPassword" placeholder="Password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$" required/>
                    <label for="floatingPassword">Password</label>
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
export default AddTeamLeader;