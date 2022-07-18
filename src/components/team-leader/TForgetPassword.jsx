import React,{ useRef } from "react";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import emailjs from '@emailjs/browser';


const TForgetPassword = ({setLoginUser}) =>{
    const navigate = useNavigate()

    const [ user, setUser] = useState({
        email:"",
      
    })
    const form = useRef();

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/forgetPassword_teamleader", user)
        .then(res => {
            if(res.data.message=="0")
            {
                emailjs.send("service_ns527x1","template_dy858yp",{
                from_name: "Production Management",
                message: `Your password is ${res.data.user.password}`,
                to_email:user.email,
                },'joCHt3Cx4Mt5ZM56R');

                alert("Password send");
                navigate("/teamleaderlogin")


            }
            else if(res.data.message=="2"){
                alert("email didn't match");
               
            }
       })
    }

    
    

    return (
        <React.Fragment>
            <Navbar/>
    <div className="text-center login bg-info">

        {console.log(user)}
        <div className="row justify-content-center pt-5">
           
            <div className="col-sm-4  card bg-dark text-white">
            <div className="mb-md-3 mt-md-4 pb-1">
                        <h2 className="fw-bold mb-2 text-uppercase">Forget Password</h2>
              <p className="text-white-50 mb-5">Please enter your email!</p>

                <div className="form-outline form-white mb-4">
                    <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange} id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
        
                <button className="btn btn-outline-light btn-lg px-5" onClick={login}>Send Password</button>
               
                </div>
            <div className="col-sm-4"></div>
            </div>
        </div>
    </div>
    <div className="bg-info pt-3">
    </div>
    </React.Fragment>
    );

}
export default TForgetPassword;