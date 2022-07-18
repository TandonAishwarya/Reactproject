import React,{ useState,useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom"
import Navbar from "../navbar/Navbar";
import axios from "axios";
const MonthlyReport = ({ setLoginUser }) => {
    const navigate = useNavigate()
    const [users, setUser] = useState([]);
    const loadUsers = async () => {
     
        const result = await axios.get("http://localhost:9002/get_monthly_report");
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
                            <h2 className="text-danger"><u>Monthly Reports</u></h2>
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
                                    <td>{user.month}</td>
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
export default MonthlyReport;