import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import Footer from "../navbar/Footer";
import Navbar from "../navbar/Navbar";
const Specifications = ({ setLoginUser }) => {
    const navigate = useNavigate()
    return (
        <React.Fragment>

            <Navbar />
            <div>
                <img src="assets/inner-banner01.jpg" alt="" />
            </div>
            <div className="container text-center">
                <div className="row mt-5 d-flex">
                    <div className="col-sm-8 ">
                        <div className="">
                            <h2 className="text-danger">About the Department</h2>
                            <p className="">

                                Department of Chemicals and Petrochemicals (DCPC) aims:

                                To formulate and implement policy and programmes for achieving growth and development of the chemical and petrochemical sectors in the country; and.
                                To foster the spirit of public-private partnership for overall development of above mentioned sectors of the industry.
                                The Department has the mandate to deal with the following broad subject matters:

                                Insecticides excluding the administration of The Insecticides Act, 1968 (46 of 1968);
                                Dye-stuffs and Dye-Intermediates;
                                All organic and inorganic chemicals, not specifically allotted to any other Ministry or Department;
                                Planning, development and assistance to all industries dealt with by the Department;
                                Bhopal Gas Leak Disaster-Special Laws relating thereto;
                                Petrochemicals;
                                Industries relating to production of non-cellulosic synthetic fibers (Nylon Polyesters, Acrylic etc.);
                                Synthetic Rubber; and
                                Plastics including fabrication of plastic and moulded goods.
                                The Department has five major divisions viz. Chemicals, Petrochemicals, Administration, Statistics & Monitoring (S&M) and Economic Division. The Internal Finance Division is common to the three Departments in the Ministry of Chemicals and Fertilizers. There are three Central Public Sector Undertakings (CPSU) in the chemical sector namely Hindustan Organic Chemicals Ltd. (HOCL), HIL (India) Limited and Hindustan Fluorocarbons Limited (HFL), which is a subsidiary of HOCL. The autonomous institutes under this Department are Central Institute of Petrochemicals Engineering & Technology (CIPET) and Institute of Pesticides Formulation Technology (IPFT).
                                Dr. Mansukh Mandaviya is the Minister of Chemicals and Fertilizers. Shri Bhagwanth Khuba is the Minister of State for Chemicals and Petrochemicals. Ms Arti Ahuja assumed charge as Secretary in the Department on 14.02.2022.</p>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-3 border border-primary">

                        <img src="assets/narendra-modi.jpg" />
                        <p><b>Hon'ble Prime Minister</b><br />Shri Narendra Modi</p>

                        <img src="assets/minster-060917_0.jpg" />
                        <p><b>Hon'ble Minister</b><br />Dr. Mansukh Mandaviya</p>
                        <img src="assets/4632_0.jpg" />
                        <p><b>Hon'ble Minister of State (C&F)</b><br />Shri Bhagwanth Khuba</p>

                    </div>
                </div>
            </div>
<Footer/>
        </React.Fragment>
    );

}
export default Specifications;