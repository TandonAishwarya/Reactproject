import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import Footer from "../navbar/Footer";
import Navbar from "../navbar/Navbar";
const Quality_Control_infrastucture = ({ setLoginUser }) => {
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
                            <h2 className="text-danger">Quality Control Infrastructure</h2>
                            <p className="">

                            Quality Control (QC) Department of HOC Kochi Unit has got full fledged dedicated QC Laboratories separately for Phenol/Acetone and Hydrogen Peroxide, equipped with latest sophisticated Analytical Instruments. We have trained/highly qualified Officers/Chemists to carryout different QC functions.
To assure quality of all Finished Products, stringent quality control measures are taken at every stage of manufacture including testing of all Raw Materials, Process Samples and Finished Products. Only products certified by QC Department are sent for storage in Finished Product Tankages from where despatches are made.</p>
<p>
We have,
<ul><li>Trained and highly qualified QC Officers and Chemists with exposure to latest analytical techniques</li>
<li>Well equipped laboratories with latest Analytical Instruments and software (Our laboratory is approved by Kerala State Pollution Control Board)</li>
<li>Latest methods for Calibration/Standardisation to ensure Accuracy, Precision and Repeatability</li>
<li>The following latest Analytical Instruments are provided:</li>
<li>Imported Perkin Elmer Gas Chromatographs Model Autosystem XL and Clarus 500 with latest Turbochrom software work station</li>
<li>Imported Perkin Elmer High Performance Liquid Chromatography (HPLC) system</li><li>Polarographic/Voltametric Analyser Metrohm Model (imported)757</li><li>Perkin Elmer and Spectronic-20 UV/VIS Spectrophotometers (imported)</li><li>SGE Total Organic Carbon (TOC) Analyser (imported)</li><li>Mitsubishi Sulphur Analyser (imported)</li><li>KF Titrators, Mettler & Metrohm (imported)</li><li>Auto Titrators, Mettler & Metrohm (imported)</li><li>Electronic Analytical Balances, Mettler/Sartorius (imported)</li></ul>
</p>
<p>
QUALITY MEASURES
<ul><li>Certificate of Analysis (COA) and Sealed sample of the product is provided with all product despatches in Tankers. For drum despatches, COA is provided on request.</li><li>Specifications of our products viz. Phenol, Acetone and Hydrogen Peroxide (H2O2) and test methods are available on request from QC Department of HOC, Kochi Unit.</li><li>Analytical training support in our QC Lab is provided free of charges to our customers on request.</li></ul>



 
</p>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                    
                </div>
            </div>
<Footer/>
        </React.Fragment>
    );

}
export default Quality_Control_infrastucture;