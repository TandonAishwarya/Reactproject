import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
import TeamLeaderNavbar from "../navbar/TeamLeaderNavbar";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const Performance_analysis = () => {
    const [users, setUser] = useState([]);
    const teammembermobile = localStorage.getItem('umobile'); 
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
      });

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
      if(typeof teammembermobile == 'undefined' || teammembermobile == null )
        {
            navigate("/TeamLeaderLogin");
           // console.log("Empty");
        }
      const result = await axios.post("http://localhost:9002/TeamLeaderReports_m",{'mobile_no':teammembermobile});
      setUser(result.data);
      var labels_count = [];
      var completion_per = [];
      for(var i =0; i<(result.data).length;i++)
      {
        labels_count.push(result.data[i].today_date);
        completion_per.push(result.data[i].completion);
      } 
     
            setChartData({
                labels: labels_count ,
                datasets: [
                  {
                    label: "Percentage",
                    data: completion_per,
                    backgroundColor: [
                      "#ffbb11",
                      "#ecf0f1",
                      "#50AF95",
                      "#f3ba2f",
                      "#2a71d0",
                      "#ecf0f1",
                    ]
                  }
                ]
              });
        }
    const deleteUser = async id => {
        // await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    };

    const navigate = useNavigate()

    return (
        <div>
            <TeamLeaderNavbar />
            <div className="row mt-1 p-1">
                <div className="col-sm-1 "></div>
               
            </div>
            <div className="row mt-1 p-2">
                <div className="col-sm-1 "></div>
                <div className="col-sm-10">
                <h3>Performance Analysis </h3>
            <div style={{ height:'500px',width:'500px',margin:'0 auto' }}>
            <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Tasks"
            },
            legend: {
              display: false,
              position: "bottom"
           }
          }
        }}
      />
      </div>
                </div>
                <div className="col-sm-1 "></div>
            </div>
        </div>
    );

}
export default Performance_analysis;