import React from "react";
import { useNavigate } from "react-router-dom"
import AdminNavbar from "./AdminNavbar";
const AdminProfile = ({setLoginUser}) =>{
    const navigate = useNavigate()
    return (
        <div>
        <AdminNavbar/>

        <div className="row mt-5 p-5">
            <div className="col-sm-4 ">
                <img src="assets/admin.png" height={"300"}/>
            </div> 
            <div className="col-sm-4">
                <label>Name</label><br/>
                <label>Email</label><br/>

                <label>Mobile No</label><br/>
            </div> 
            <div className="col-sm-4 ">
                
            </div>    
        </div>
        </div>
    );

}
export default AdminProfile;