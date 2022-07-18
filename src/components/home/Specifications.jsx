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
                <div className="row mt-5">
                    <div className="col-sm-8 ">
                        <div className="">
                            <h2 className="text-danger">Specification</h2>
                           <div className="mt-3">
                            <h6>PHENOL</h6>
                            <table className="table" border="1px">
                                <tr>
                                    <th>No</th>
                                    <th>Parameters</th>
                                    <th>Specifications</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Colour & Appearance</td>
                                    <td>Colourless to light pink and free from suspended matter at 41oC.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Purity</td>
                                    <td>99.50 min</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Residue on evaporation (wt. %)</td>
                                    <td>0.05 max.</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Crystallizing point oC.</td>
                                    <td>40.5 min</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Moisture (%)</td>
                                    <td>0.10 max.</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Packing</td>
                                    <td>Tanker load, 215 kg. mild steel drums.</td>
                                </tr>
                            </table>
                           </div>
                           <div  className="mt-3">
                            <h6>HYDRATED PHENOL</h6>
                            <table  className="table" border="1px">
                                <tr>
                                <th>No</th>
                                    <th>Parameters</th>
                                    <th>Specifications</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Colour & Appearance</td>
                                    <td>Colourless to light pink and free from suspended matter.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Phenol content (% w/w)</td>
                                    <td>91.5 - 96</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Water content (% w/w)</td>
                                    <td>4-8.5</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Packing</td>
                                    <td>Tanker load</td>
                                </tr>
                            </table>
                           </div>
                           <div className="mt-3">
                            <h6>ACETONE</h6>
                            <table  className="table" border="1px">
                                <tr>
                                <th>No</th>
                                    <th>Parameters</th>
                                    <th>Specifications</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Colour (HU)</td>
                                    <td>10 max</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Relative Density at 27/27oC.</td>
                                    <td>0.7840 - 0.7860</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Distillation Range</td>
                                    <td>Shall distill within 1oC including 56.1oC</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Water content (wt.%)</td>
                                    <td>0.40 max</td>
                                </tr>
                                <tr>
                                    <td>5		</td>
                                    <td>Residue on Evaporation (mg/100 ml.)</td>
                                    <td>5 max.</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Acidity as Acetic Acid (gm/100 ml.)</td>
                                    <td>0.002 max.</td>
                                </tr>
                            </table>
                           </div>
                           
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                    
                </div>
            </div>
<Footer/>
        </React.Fragment>
    );

}
export default Specifications;