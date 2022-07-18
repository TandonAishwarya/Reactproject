import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import ManagerNavbar from "../navbar/ManagerNavbar";
import emailjs from '@emailjs/browser';
const AddPayment = (props) => {
    const navigate = useNavigate()
    const location = useLocation();
    const usermobile = localStorage.getItem('umobile');
    const [paymentDeatil, setPaymentDeatil] = useState({
        mobile_no: "",
        amount: "",
        card_no: "",
        expire_date: "",
        cvv: "",
        payment_date:""
    })
    const[ teamMember,setTeamMember] = useState({});

    const handleChange = e => {
        const { name, value } = e.target
        setPaymentDeatil({
            ...paymentDeatil,
            [name]: value
        })
    }
    const loadUsers = async () => {
        const { teammembermobile } = location.state;
        if(typeof usermobile == 'undefined' || usermobile == null )
        {
            navigate("/ManagerLogin");
           // console.log("Empty");
        }
        axios.post("http://localhost:9002/viewteamleader",{teammembermobile:teammembermobile})
        .then(res => {
                setTeamMember(res.data);
                console.log(res.data.email)
        })  
        setPaymentDeatil({
            ...paymentDeatil,
            mobile_no: teammembermobile
        })
    };

    const Add_Feedback = (event) => {
      
        axios.post("http://localhost:9002/add_payment", paymentDeatil)
            .then(res => {
                if (res.data.message != 0) {
                    
                    emailjs.send("service_ns527x1","template_dy858yp",{
                        from_name: "Production Management",
                        message: `Paid - Amount : ${paymentDeatil.amount} , Payment date : ${paymentDeatil.payment_date}`,
                        to_email:teamMember.email,
                        },'joCHt3Cx4Mt5ZM56R');

                    alert("Added Successful");
                    navigate("/MAllTeamMembers")
                }
                else {
                    alert("Please Try again");
                }
            });
    }

    useEffect(() => {
        loadUsers();

    }, []);

    return (
        <div>
            <ManagerNavbar />
            <div className="text-center Add_manger">
                <div className="row justify-content-center pb-5 pt-3 me-0">
                    <div className="col-lg-4 mx-auto">
                        <div className="card mt-2 mx-auto p-4 bg-light">
                            <div className="card-body bg-dark text-white ">
                                <div className="container">
                                    <div className="col-sm-12 pb-3 pt-3">
                                        <h1 className="h3 mb-3 fw-normal text-uppercase">Add Payment</h1>
                                        <div className="form-outline form-white mb-4">
                                            <label for="floatingPassword"> Amount</label>
                                            <input type="number" className="form-control" name="amount" value={paymentDeatil.amount} placeholder="Total Amount" onChange={handleChange}  />

                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label for="floatingPassword"> Payment Date</label>
                                            <input type="date" className="form-control" name="payment_date" value={paymentDeatil.payment_date} placeholder="Date" onChange={handleChange}  />

                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label for="floatingPassword">Card Number</label>
                                            <input type="text" className="form-control" name="card_no" value={paymentDeatil.card_no} placeholder="Card Number" onChange={handleChange} />

                                        </div>
                                        <div className="d-flex">
                                            <div className="form-outline form-white mb-4 pe-5">
                                                <label for="floatingPassword">Expiration</label>
                                                <input type="number" className="form-control" name="expire_date" value={paymentDeatil.expire_date} placeholder="Expiration" onChange={handleChange} />

                                            </div>
                                            <div className="form-outline form-white mb-4">
                                                <label for="floatingPassword">CVV</label>
                                                <input type="number" className="form-control" name="cvv" value={paymentDeatil.cvv} placeholder="CVV" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <button className="w-100 btn btn-lg btn-primary" onClick={Add_Feedback}>Pay</button>
                                    </div></div></div></div></div></div>
            </div>
        </div>
    );

}
export default AddPayment;