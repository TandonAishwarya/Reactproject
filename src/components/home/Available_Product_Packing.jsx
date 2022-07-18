import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import Footer from "../navbar/Footer";
import Navbar from "../navbar/Navbar";
const Available_Product_Packing = ({ setLoginUser }) => {
    const navigate = useNavigate()
    return (
        <React.Fragment>

            <Navbar />
            <div>
                <img src="assets/inner-banner01.jpg" alt="" />
            </div>
            <div className="container text-left">
                <div className="row mt-5 d-flex">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10 ">
                        <div className="">
                            <h2 className="text-danger">Available Product Packing</h2>
                            <table className="mt-5 table" border="3">
                                <tr>
                                    <td> <img src="assets/tanker01.png" alt="" height={200} width={200} /></td>
                                    <td> <img src="assets/Phenol-drum.png" alt="" height={200} width={200} /></td>
                                    <td><h6>PHENOL</h6>

                                        Phenol is sold in 100% pure form and in hydrated form.
                                        In the 100% pure form, Phenol is supplied in bulk (in road tankers with thermally insulated tanks) and also packed in Olive Green coloured Mild Steel drums of net weight 215 Kgs and gross weight 237 kgs.
                                        Phenol is sold only in bulk in Hydrated form with water content of around 6%. Water content can be changed as specifically required by the customer.</td>
                                </tr>
                                <tr>
                                    <td> <img src="assets/tanker01.png" alt="" height={200} width={200} /></td>
                                    <td> <img src="assets/Acetone-drum.png" alt="" height={200} width={200} /></td>
                                    <td><h6>ACETONE</h6>

                                    

Acetone is sold in Bulk form (in road tankers) and in packed form in Cherry Red coloured Mild Steel drums of net weight 160 Kgs and gross weight 182 kgs.</td>
                                </tr>
                                <tr>
                                    <td> <img src="assets/tanker01.png" alt="" height={200} width={200} /></td>
                                    <td> <img src="assets/Hydrogen-peroxide-can.png" alt="" height={200} width={200} /></td>
                                    <td><h6>HYDROGEN PEROXIDE</h6>

                                    

Hydrogen peroxide is sold in Bulk form (in road tankers) and in packed form in Blue coloured H DPE cans of net weight 30 kgs.</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>

                </div>
            </div>
            <Footer />
        </React.Fragment>
    );

}
export default Available_Product_Packing;