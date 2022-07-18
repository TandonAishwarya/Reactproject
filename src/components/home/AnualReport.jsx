import React,{ useState,useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom"
import Navbar from "../navbar/Navbar";
import axios from "axios";
const AnualReport = ({ setLoginUser }) => {
    const navigate = useNavigate()
    const [users, setUser] = useState([]);
    const loadUsers = async () => {
     
        const result = await axios.get("http://localhost:9002/get_anual_report");
        console.log(result.data.reverse());
        setUser(result.data.reverse());
    };
    useEffect(() => {
        loadUsers();
      
    }, []);
    return (
        <React.Fragment>

            <Navbar />
            <div>
                <img src="assets/inner-banner01.jpg" alt="" />
            </div>
            <div className="container text-start">
                <div className="row mt-5 d-flex">
                    <div className="col-sm-12 ">
                        <div className="">
                            <h2 className="text-danger"><u>Anual Reports</u></h2>
                        </div>
                        <table className="table table-bordered">
                            <thead className="table-danger"> 
                            <tr>
                                <th>Title</th>
                                <th>Details</th>
                               
                            </tr>
                            </thead>
                            <tbody>
                            {users.map((user, index) => (
                                <tr>
                                    <td>{user.year}</td>
                                    <td><a href={process.env.PUBLIC_URL+`/backend/${user.file}`} download={user.file}>Download</a></td>
                                    
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );

}
export default AnualReport;