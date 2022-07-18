import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import Footer from "../navbar/Footer";
import Navbar from "../navbar/Navbar";
const Manufacturing_Process = ({ setLoginUser }) => {
    const navigate = useNavigate()
    return (
        <React.Fragment>

            <Navbar />
            <div>
                <img src="assets/inner-banner01.jpg" alt="" />
            </div>
            <div className="container text-left">
                <div className="row mt-5 ">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <div className="">
                            <h2 className="text-danger">Manufacturing Process</h2>
                            <div>
                                <h6>PHENOL PLANT PROCESS DIAGRAM</h6>
                                <img src="assets/phenol_plant.png" alt="" />
                                <br /><br />
                                <h6>Phenol plant</h6>
                                <p>Phenol Complex consists of the following units</p>

                                <ul><li>Propylene Recovery Unit</li><li>Cumene Unit</li><li>Phenol Unit</li></ul>

                                <p>Brief process description of each unit is given below.</p>
                                <hr />
                                <h6>Propylene Recovery Unit</h6>
                                <p>

                                    The plant is designed by Engineers India Limited to produce two grade of propylene Viz. Lean propylene of 75% purity suitable for the production of Cumene and Chemical grade propylene of 95% purity.
                                    Capacity of the plant
                                    <ul><li>Lean Propylene (75% propylene): 21840 TPA</li><li>Chemical grade (95% propylene): 7160 TPA</li></ul>


                                    The process scheme consists of two fractionation columns with the auxiliaries and equipment for the removal of COS (Carbonyl sulphide) as H2S from the hydrocarbon. The first fractionator acts as C3-C4 splitter producing 75% propylene as top product. The second fractionator functions as C3-C3 splitter producing 95% propylene as top product. Propylene from C3-C4 splitter is treated in Caustic/MEA and water washing system to remove the sulphur.</p>
                                <hr />
                                <h6>Phenol Unit</h6>
                                <p>


                                    This unit is based on UOP’s CUMOX process, which is a commercially established Cumene per oxidation process for the economic and efficient production of phenol and acetone.

                                    Capacity
                                    <ul><li>Phenol : 40,000 TPA</li><li>Acetone :24,640 TPA</li></ul>

                                    The CUMOX unit has been divided into the following process section.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>

                </div>
            </div>
            <Footer />
        </React.Fragment>
    );

}
export default Manufacturing_Process;