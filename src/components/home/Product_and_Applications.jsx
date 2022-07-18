import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import Footer from "../navbar/Footer";
import Navbar from "../navbar/Navbar";
const Product_and_Applications = ({ setLoginUser }) => {
    const navigate = useNavigate()
    return (
        <React.Fragment>

            <Navbar />
            <div>
                <img src="assets/inner-banner01.jpg" alt="" />
            </div>
            <div className="container text-left">
                <div className="row mt-5 d-flex">
                    <div className="col-sm-8 ">
                        <div className="">
                            <h2 className="text-danger">Products and Applications</h2>
                            <div>
                                <h6> PHENOL</h6>
                                <p>
                               
Phenol is a versatile industrial organic chemical. The largest end use of Phenol is in Phenol-formaldehyde resins used in wood additives as well as moulding and laminating resins, paints, varnishes and enamels.
Phenol which is also referred to as Carbolic Acid, or Monohydroxy Benzene is used to produce a wide variety of chemical intermediates, including Phenolic Resins, Bisphenol-A, Caprolactum, Alkyl Phenols, Adipic Acid, Plasticizers, etc.
Phenol is also used in the manufacture of preservatives, disinfectants, lubricating oils, herbicides, insecticides, pharmaceuticals, etc.
                                </p>
                            </div>
                            <div>
                                <h6> HYDROGEN PEROXIDE 50% W/W</h6>
                                <p>
                                
Hydrogen Peroxide 50% w/w is an ecofriendly chemical product from HOC Kochi Unit with wide application in Paper and Textile Industries for Bleaching purpose as a substitute for hazardous Chlorine. It is also used in Electronic and metallurgical industries, Effluent Treatment Plants, Sewage Treatment and for removal of Toxic Pollutants from Industrial Gas Streams.
                                </p>
                            </div>
                            <div>
                                <h6> ACETONE</h6>
                                <p>
                                ACETONE
Acetone is an important commercial solvent and raw material with wide usage in the chemical explosives and lacquer industry. It is commonly used as a solvent for Cellulose Acetate, Nitrocellulose, Celluloid, Cellulose Ether, chlorinated Rubber, various resins, fats and oils and an absorbent for Acetylene Gas. It is being increasingly used in the synthesis of a number of chemicals such as Diacetone Alcohol, Methyl Methacrylate and certain resins, pharmaceuticals and perfumes.

                                </p>
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
export default Product_and_Applications;