import React, {useState} from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import Navbar from "../navbar/Navbar";



const Adminlogin = ({setLoginUser}) =>{
    const navigate = useNavigate()

    const [ user, setUser] = useState({
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

    const login = (event) => {
        event.preventDefault();
        axios.post("http://localhost:9002/admin_login", user)
        .then(res => {
            if(res.data.message=="0")
            {
                alert("Login Successfull");
              //  setLoginUser(res.data.user)
                navigate("/AdminProfile")
            }
            else if(res.data.message=="1"){
                alert("Password didn't match");
                navigate("/Adminlogin")
            }
            else{
                alert("User not registered");
                navigate("/Adminlogin")
            }
            console.log(res.data.user)
            console.log(res.data.message)
        })
    }

    return (
        <React.Fragment>
            <Navbar/>
    
    <section className="h-100 gradient-form">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
          <div className="col-lg-3">
            </div>
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" height={100} width={100}
                   />
                  <h4 className="mt-1 mb-5 pb-1">Admin</h4>
                </div>

                <form onSubmit={login}>
                  <p>Please login to your account</p>

                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example11" className="form-control"
                      placeholder="email address" name="email" value={user.email} onChange={handleChange}  required pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}" />
                    <label className="form-label" for="form2Example11">Username</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example22" className="form-control" name="password" value={user.password} onChange={handleChange}/>
                    <label className="form-label" for="form2Example22">Password</label>
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log in</button>
                  </div>

                 
                </form>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </React.Fragment>
    );
}

export default Adminlogin;