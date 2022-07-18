import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import Navbar from "../navbar/Navbar";
import Sidebar from "../navbar/sidebar";
const RTI = ({ setLoginUser }) => {
    const navigate = useNavigate()
    return (
        <React.Fragment>

            <Navbar />
            <div>
                <img src="assets/inner-banner01.jpg" alt="" />
            </div>
            <div className="container text-start">
                <div className="row mt-5 d-flex">
                <div className="col-sm-2 ">
                    <Sidebar/>
                    </div>
                    <div className="col-sm-10 ">
                        <div className="">
                            <h2 className="text-danger"><u>RTI</u></h2>
                        </div>
                        <div>
                            <p>The Right to Information Act, 2005, an Act to provide for setting out the practical regime of right to information for citizens to secure access to information under the control of public authorities, in order to promote transparency and accountability in the working of every public authority, the constitution of a Central Information Commission and State Information Commissions and for matters connected therewith or incidental thereto, was enacted by the Parliament. The Act of Parliament has received the assent of the President on the 15th June 2005.<br/>

As provided in the Act, this Department has appointed several CIPO and Appellate Authorities. The list of such CPIO and Appellate Authorities has been modified and kept updated from time to time.<br/>

For the list of CPIOs and Appellate Authorities <br/>
<ul>
    <li>For filing an application/appeal <a href={"https://rtionline.gov.in/index.php"} >Click here</a></li>
    <li>For the Right to Information Act, 2005 <a href={"https://rti.gov.in/rtiact.asp"} >Click here</a></li>
    <li>For Right to Information portal <a href={"https://rti.gov.in/index.asp"} >Click here</a></li>
    <li>For Central Information Commission Portal <a href={"https://cic.gov.in/"} >Click here</a></li>
 
</ul>




</p>
                        </div>
                       
                    </div>
                </div>
            </div>

        </React.Fragment>
    );

}
export default RTI;