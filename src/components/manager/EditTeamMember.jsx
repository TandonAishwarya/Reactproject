import React, {useState,useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom"
import axios from "axios";
import {useLocation} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import ManagerNavbar from "../navbar/ManagerNavbar";

const EditTeamMember = (props) => {
    const [users, setUser] = useState([]);
    const usermobile = localStorage.getItem('umobile');
    const [ user, setUser2] = useState({
        id:"",
        name:"",
        department:"",
        mobile_no:"",
        email:""
    })
    const navigate = useNavigate()
    const location = useLocation();
  
    const loadUsers = async () => {
        if(typeof usermobile == 'undefined' || usermobile == null )
        {
            navigate("/ManagerLogin");
           // console.log("Empty");
        }
     //   const usermobile = localStorage.getItem('umobile');     
        const {teammembermobile} = location.state;
        console.log(teammembermobile);
        const result="" ;
             await axios.post("http://localhost:9002/viewteamleader",{'teammembermobile':teammembermobile}).then(response => {
                setUser(response.data);
                setUser2({
                    id:response.data._id,
                     name:response.data.name,
                     department:response.data.department,
                     mobile_no:response.data.mobile_no,
                     email:response.data.email
                 });
               
              })
          //  console.log(result);
        //setUser(result.data);
        //console.log(users._id)
        
       
    };
   
    useEffect(() => {
        loadUsers();
      
    }, []);
    const handleChange = e => {
        const { name, value } = e.target
        setUser2({
            ...user,
            [name]: value
        })
        
    }
    const fetchdata =() =>{
       
            
    }
    const Edit_Team_leader = (event) => {
        event.preventDefault();
        axios.post("http://localhost:9002/edit_team_leader", user)
        .then(res => {
            if(res.data.message!=0)
            {
            alert("Update Successful");
            navigate("/MAllTeamMembers")
            }
            else{
                alert("Please Try again");
            }
            //console.log(res.data.user);
           // setLoginUser(res.data.user)
            
        })
    }

 if(users.length!=0){

    return (

        <React.Fragment >
            
            <ManagerNavbar umobile={users.mobile_no} />
            <div className="text-center Add_manger">
        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
               <h1 className="h3 mb-3 fw-normal">Edit Team Leader</h1>
               <form onSubmit={Edit_Team_leader}>
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
               
                <button className="w-100 btn btn-lg btn-primary" type="submit">Add</button>
                </form>
                <div className="col-sm-4"></div>
            </div>
        </div>
        </div>
        </React.Fragment>
    );
 }
}
export default EditTeamMember;