import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import PDFDocument from "pdfkit";
import fs from "fs";

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/productionDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const adminSchema = new mongoose.Schema({
    email: String,
    password: String
})
const managersSchema = new mongoose.Schema({
        manager_name:String,
        designation:String,
        mobile_no:String,
        email:String,
        password:String
})
const teamLeaderSchema = new mongoose.Schema({
    name:String,
    department:String,
    mobile_no:String,
    email:String,
    password:String
})
const ReportsSchema = new mongoose.Schema({
    mobile_no:String,
    department:String,
    no_of_worker:String,
    production_quntity:String,
    today_date:String,
    feedback:String,
    product_name:String,
    raw_material:String,
    completion:String
})
const ProductSchema = new mongoose.Schema({
    product_name:String,
    raw_material:String
})
const TaskSchema = new mongoose.Schema({
    mobile_no:String,
        product_name:String,
        quntity:String,
        no_of_worker:String,
        department:String,
        assignment_date:String
})
const PaymentSchema = new mongoose.Schema({
    mobile_no: String,
    amount: String,
    card_no: String,
    expire_date: String,
    cvv: String,
    payment_date:String
})

const AnualReportSchema = new mongoose.Schema({
    file:String,
    year:String
})

const MonthReportSchema = new mongoose.Schema({
    file:String,
    month:String
})

const Admin = new mongoose.model("admins", adminSchema)
const Managers = new mongoose.model("managers", managersSchema)
const TeamLeaders = new mongoose.model("teamLeaders", teamLeaderSchema)
const Reports = new mongoose.model("reports", ReportsSchema)
const Products = new mongoose.model("products", ProductSchema)
const Tasks = new mongoose.model("tasks",TaskSchema)
const Payments = new mongoose.model("payments",PaymentSchema)
const AnualReport = new mongoose.model("anualReport",AnualReportSchema)
const MonthReport = new mongoose.model("monthReport",MonthReportSchema)
//Routes
app.post("/admin_login", (req, res)=> {
    const { email, password} = req.body
    Admin.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "0", user: user})
                //0 = Login Successfull
            } else {
                res.send({ message: "1"})
                //1=Password didn't match
            }
        } else {
            res.send({message: "2"})
            //2=User not registered
        }
    })
}) 
app.post("/team_leader_login", (req, res)=> {
    const { email, password} = req.body
    TeamLeaders.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "0", user: user.mobile_no})
                
                //0 = Login Successfull
            } else {
                res.send({ message: "1"})
                //1=Password didn't match
            }
        } else {
            res.send({message: "2"})
            //2=User not registered
        }
    })
}) 
app.post("/manager_login", (req, res)=> {
    const { email, password} = req.body
    Managers.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "0", user: user.mobile})
                //0 = Login Successfull
            } else {
                res.send({ message: "1"})
                //1=Password didn't match
            }
        } else {
            res.send({message: "2"})
            //2=User not registered
        }
    })
}) 
app.get("/managerprofile", (req, res)=> {
    const mobile = req.body
    Managers.find({}, function (err, users) {
        res.send(users);
    });
});

app.post("/viewmanager", (req, res)=> {
   
    Managers.findOne({}, function (err, users) {
        res.send(users);
    });
});

app.post("/viewteamleader", (req, res)=> {
    const {teammembermobile} = req.body

    TeamLeaders.findOne({mobile_no:teammembermobile}, function (err, users) {
        res.send(users);
    });
});

app.post("/edit_team_leader", (req, res)=> {
    const { id,name, department, email, mobile_no} = req.body
    TeamLeaders.updateOne({'_id':req.body.id},{$set:{'name':req.body.name,'designation':req.body.department,'email':req.body.email,'mobile_no':req.body.mobile_no}}, function(err, result) {
        if (err)
        {
            res.send({message: "0"})
        }
        else
        {
            res.send({message: "1"});
        }
    });
    })

    app.post("/add_feedback_report", (req, res)=> {
        const { id,feedback} = req.body
        Reports.updateOne({'_id':req.body.id},{$set:{'feedback':req.body.feedback}}, function(err, result) {
            if (err)
            {
                res.send({message: "0"})
            }
            else
            {
                res.send({message: "1"});
            }
        });
        })
        app.post("/add_completion_report", (req, res)=> {
            const { id,completion} = req.body
            Reports.updateOne({'_id':req.body.id},{$set:{'completion':req.body.completion}}, function(err, result) {
                if (err)
                {
                    res.send({message: "0"})
                }
                else
                {
                    res.send({message: "1"});
                }
            });
            })

    app.post("/deleteteamleader", (req, res)=> {
        const {teammembermobile} = req.body
    
        TeamLeaders.deleteOne({mobile_no:teammembermobile}, function (err, users) {
            if (err)
            {
                res.send({message: "0"})
            }
            else
            {
                res.send({message: "1"});
            }
        });
    });

    app.post("/teamleaderprofile", (req, res)=> {
        const {teammembermobile} = req.body
      
        TeamLeaders.findOne({mobile_no:teammembermobile}, function (err, users) {
            res.send(users);
        });
    });


    app.post("/add_team_leader_report", (req, res)=> {
        const {mobile_no,department,no_of_worker,production_quntity,today_date,product_name,raw_material} = req.body;
        
                const user = new Reports({
                    mobile_no,
                    department,
                    no_of_worker,
                    production_quntity,
                    today_date,
                    product_name,
                    raw_material
                })
                user.save(err => {
                    if(err) {
                        res.send(err)
                    } else {
                        res.send( { message: "Successfully Registered, Please login now." })
                    }
                })      
    })

    app.post("/add_task", (req, res)=> {
        const {mobile_no,product_name,quntity,no_of_worker,department,assignment_date} = req.body;
        
                const user = new Tasks({
                    mobile_no,product_name,quntity,no_of_worker,department,assignment_date
                })
                user.save(err => {
                    if(err) {
                        res.send(err)
                    } else {
                        res.send( { message: "Successfully Registered, Please login now." })
                    }
                })      
    })
    app.post("/add_payment", (req, res)=> {
        const { mobile_no,amount,card_no,expire_date,cvv,payment_date} = req.body;
        
                const user = new Payments({
                    mobile_no,amount,card_no,expire_date,cvv,payment_date
                })
                user.save(err => {
                    if(err) {
                        res.send(err)
                    } else {
                        res.send( { message: "Successfully Registered, Please login now." })
                    }
                })      
    })

app.post("/add_manager", (req, res)=> {
    const { manager_name, designation, mobile_no, email, password} = req.body
    Managers.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new Managers({
                manager_name,
                designation,
                mobile_no,
                email, 
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
})

app.post("/add_product_details", (req, res)=> {
    const { product_name, raw_material} = req.body

            const user = new Products({
                product_name,
                raw_material
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Added." })
                }
            })
    
    
})


app.get("/allManagers", (req, res)=> {
    Managers.find({}, function (err, users) {
        res.send(users);
    });
});

app.post("/forgetPassword_teamleader", (req, res)=> {
    const { email} = req.body
    TeamLeaders.findOne({ email: email}, (err, user) => {
        if(user){
            
                res.send({message: "0", user: user})
           
        } else {
            res.send({message: "2"})
            //2=User not registered
        }
     
    })
})

app.post("/forgetPassword_manager", (req, res)=> {
    const { email} = req.body
    Managers.findOne({ email: email}, (err, user) => {
        if(user){
            
                res.send({message: "0", user: user})
           
        } else {
            res.send({message: "2"})
            //2=User not registered
        }
     
    })
})


app.post("/add_team_leader", (req, res)=> {
    const { name, department, mobile_no, email, password} = req.body
    TeamLeaders.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new TeamLeaders({
                name,
                department,
                mobile_no,
                email, 
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
})

app.get("/allTeamLeaders", (req, res)=> {
    TeamLeaders.find({}, function (err, users) {
        res.send(users);
    });
});

app.post("/get_tasks", (req, res)=> {
    const teammembermobile = req.body;
    Tasks.find({mobile:teammembermobile}, function (err, users) {
        res.send(users);
    });
});

app.post("/get_payments", (req, res)=> {
    const teammembermobile = req.body;
    Payments.find({mobile:teammembermobile}, function (err, users) {
        res.send(users);
    });
});

app.post("/anual_report_genrate", (req, res)=> {
    const {year} = req.body;
    let data=[];
    Reports.find({}, function (err, users) {
        
        users.forEach(element => {
            if(element.today_date.split( "-" )[0]==year.split( "-" )[0]){
            data.push(element);
            }
          });
console.log(data);
          var j = 300;
        const doc = new PDFDocument();
        doc.pipe(fs.createWriteStream(`output${year.split( "-" )[0]}.pdf`));
        doc
            .fontSize(25)
            .text('Anual Report', 210, 100);
        data.forEach(i => { 
            doc
            .fontSize(12)
            .text("Date : " + i.today_date, 100, j)
            .text("Product Name. : " + i.product_name, 100, j+20)
            .text("Raw material : " + i.raw_material, 100, j+40)
            .text("Department : " + i.department, 100, j+60)
            .text("Quntity : " + i.production_quntity, 100, j+80)
            .text("No of Workers : " + i.no_of_worker, 100, j+100)
            .text(" ", 100, j+140)
            j=j+160;
        })
       
        doc.end();
        const y_data = `output${year.split( "-" )[0]}.pdf`;
        const year_data = new AnualReport({
            file:y_data,
            year:year.split( "-" )[0]
        })
        year_data.save(err => {
            if(err) {
                res.send(err)
                res.send( { message: 0 })
            } else {
                res.send( { message: "Successfully Added" })
            }
        })
    })

  
});

app.post("/monthly_report_genrate", (req, res)=> {
    const {month} = req.body;
    let data=[];
    Reports.find({}, function (err, users) {
        
        users.forEach(element => {
            if(element.today_date.split( "-" )[1]==month.split( "-" )[1]){
            data.push(element);
            }
          });
console.log(data);
          var j = 300;
        const doc = new PDFDocument();
        doc.pipe(fs.createWriteStream(`output${month.split( "-" )[1]}.pdf`));
        doc
            .fontSize(25)
            .text('Monthly Report', 210, 100);
        data.forEach(i => { 
            doc
            .fontSize(12)
            .text("Date : " + i.today_date, 100, j)
            .text("Product Name : " + i.product_name, 100, j+20)
            .text("Raw Material : " + i.raw_material, 100, j+40)
            .text("Department : " + i.department, 100, j+60)
            .text("Quntity : " + i.production_quntity, 100, j+80)
            .text("No of Workers : " + i.no_of_worker, 100, j+100)
            .text(" ", 100, j+140)
            j=j+160;
        })
       
        doc.end();
        const y_data = `output${month.split( "-" )[1]}.pdf`;
        const month_data = new MonthReport({
            file:y_data,
            month:month.split( "-" )[1]
        })
        month_data.save(err => {
            if(err) {
                res.send(err)
                res.send( { message: 0 })
            } else {
                res.send( { message: "Successfully Added" })
            }
        })
    })

  
});




app.get("/allProducts", (req, res)=> {
    Products.find({}, function (err, users) {
        res.send(users);
      });
});
app.get("/get_anual_report", (req, res)=> {
    AnualReport.find({}, function (err, users) {
        res.send(users);
      });
});
app.get("/get_monthly_report", (req, res)=> {
    MonthReport.find({}, function (err, users) {
        res.send(users);
      });
});
app.get("/TeamLeaderReports", (req, res)=> {
    Reports.find({}, function (err, users) {
        res.send(users);
    });
});

app.post("/TeamLeaderReports_m", (req, res)=> {
    const {mobile_no} = req.body;
    Reports.find({'mobile_no':mobile_no}, function (err, users) {
        res.send(users);
    });
});

app.listen(9002,() => {
    console.log("BE started at port 9002")
})