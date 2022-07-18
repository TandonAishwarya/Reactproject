import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import Navbar from "../navbar/Navbar";
import Sidebar from "../navbar/sidebar";
const InternationalConvention = ({ setLoginUser }) => {
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
                            <h2 className="text-danger"><u>International Convention</u></h2>
                        </div>
                        <div className="">
                            <h5>Chemical Weapons Convention (CWC)</h5>
                            <p>
India is a signatory and party to the Chemical Weapons Convention (CWC), of the Organization for the Prohibition of Chemical Weapons (OPCW) with Head Quarters at The Hague, Netherlands. The Convention is a universal, non-discriminatory, multi-lateral, disarmament treaty which prohibits the development, production, stock-piling and use of chemical weapons and monitors its elimination in order to secure chemical weapons free world. India signed the treaty at Paris on 14th day of January 1993. India, pursuant to provisions of the Convention enacted the Chemical Weapons Convention Act, 2000. As on date, 193 countries are parties to the Convention. India was the First State Party to secure the distinction of chemical weapon free state Party by destructing all its stockpile of its chemical weapons amongst all State Parties of the Convention.</p>
                        </div>
                       
<div>
    <h5>Rotterdam Convention</h5>
    <p>
    
Rotterdam Convention on Prior Informed Consent Procedures (PIC) that entered into force on 24th February, 2004, is a legally binding instrument, which was adopted on 10th September 1998 by a Conference of Plenipotentiaries in Rotterdam. India acceded to the Convention on 24.05.2006.<br/>

The Convention seeks to promote shared responsibility and cooperative efforts among State Parties in the international trade of certain hazardous chemicals in order to protect human health and the environment from potential harm. It also seeks to contribute to the environmentally sound use of these hazardous chemicals by facilitating information exchange about their characteristics, providing for a national decision making process on their import and export, and by disseminating these decisions to the Parties. Each Party is required to designate a National Authority for performing the administrative functions required under the Convention. Department of Chemicals and Petrochemicals is the Designated National Authority (DNA) for industrial chemicals and Department of Agriculture and Co-operation is the DNA for pesticides.
<br/>
There are a total of 50 chemicals listed in Annex III, 34 pesticides (including 3 severely hazardous pesticide formulations), 15 industrial chemicals, and 1 chemical in both the pesticide and the industrial chemical categories. The parties are required to communicate their import policy for these chemicals to the PIC Secretariat. The exporting Party has to provide the export notification to the importing Party in respect of banned or severely restricted chemicals in the importing country. The export notifications received from other Parties for industrial chemicals are examined by Department of Chemicals and Petrochemicals, being the DNA for industrial chemicals, and acknowledgment/ reply is sent to the DNA of the exporting country.
    </p>
</div>

                       
                    </div>
                </div>
            </div>

        </React.Fragment>
    );

}
export default InternationalConvention;