import React, { Fragment } from "react";
import bootstrap from "bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <React.Fragment>
            <div>
                <div class="container-fluid">
                    <footer class="text-center text-white bg-secondary">
                      
                        <div class="container">
                           
                            <section class="mt-5">
                              
                                <div class="row text-center d-flex justify-content-center ">
                               
                                    <div class="col-md-2">
                                        <h6 class="text-uppercase font-weight-bold">
                                            <a href="#!" class="text-white">Website policies</a>
                                        </h6>
                                    </div>
                                    <div class="col-md-2">
                                        <h6 class="text-uppercase font-weight-bold">
                                            <a href="#!" class="text-white">Help</a>
                                        </h6>
                                    </div>
                                    <div class="col-md-2">
                                        <h6 class="text-uppercase font-weight-bold">
                                            <a href="#!" class="text-white">Contact Us</a>
                                        </h6>
                                    </div>
                                    <div class="col-md-2">
                                        <h6 class="text-uppercase font-weight-bold">
                                            <a href="#!" class="text-white">Feedback</a>
                                        </h6>
                                    </div>
                                   
                                </div>
                            </section>
                
                            <hr class="my-0" />
                            <section class="mb-0">
                                <div class="row d-flex justify-content-center">
                                    <div class="col-lg-8">
                                        <p>
                                        Website Content Managed by Department of Chemicals & Petro-Chemicals, MoC&F, GoI
Designed, Developed and Hosted by National Informatics Centre( NIC )
Last Updated: 27 May 2022
                                        </p>
                                    </div>
                                </div>
                            </section>
                            
                        </div>
                        <div class="text-center p-0" >
                            © 2020 Copyright:
                            <a class="text-white" href=""
                            >MGM</a
                            >
                        </div>
                    </footer>
                </div>
                


            </div>
        </React.Fragment>
    );
}
export default Footer;