import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import {useLocation} from "react-router-dom";
import ManagerNavbar from "../navbar/ManagerNavbar";
const AddProduct = () =>{
    const navigate = useNavigate()
    const location = useLocation();
    const usermobile = localStorage.getItem('umobile');
    const [ productDetails, setProductDetails] = useState({
        product_name :"",
        raw_material :"" 
    })

    const handleChange = e => {
        const { name, value } = e.target
        setProductDetails({
            ...productDetails,
            [name]: value
        })
     
    }
  
    const Add_Product = (event) => {
        event.preventDefault();
        console.log(productDetails)
        axios.post("http://localhost:9002/add_product_details", productDetails)
        .then(res => {
            if(res.data.message!=0)
            {
            alert("Added Successful");
            navigate("/Products")
            }
            else{
                alert("Please Try again");
            }
        });
    }

    useEffect(() => {
      //  loadUsers();
      if(typeof usermobile == 'undefined' || usermobile == null )
        {
            navigate("/ManagerLogin");
           // console.log("Empty");
        }
    }, []);

    return (
        <div>
    <ManagerNavbar/>
   
    <div className="text-center Add_manger">
        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
               <h1 className="h3 mb-3 fw-normal">Add setProductDetails</h1>
               <form onSubmit={Add_Product}>
               <div className="form-floating mb-3">
               <input type="text" className="form-control" name="product_name" value={productDetails.product_name} onChange={handleChange} />
                    <label for="floatingInput">Product Name</label>       
                </div>
               <div className="form-floating mb-3">
               <textarea className="form-control" name="raw_material" value={productDetails.raw_material} onChange={handleChange}>
                    </textarea>
                    <label for="floatingInput">Raw Material</label>       
                </div>
                
                <button className="w-100 btn btn-lg btn-primary" type="submit">Add</button>
                </form>
                <div className="col-sm-4"></div>
            </div>
        </div>
        </div>
        </div>
    );

}
export default AddProduct;