const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const EmployeeModel=require('./models/Employee')

const app=express()

app.use(express.json())
app.use(cors(
    {
    origin:["https://deploy-mern-1whq.vercel.app"],
    methods:["POST","GET"],
    credentials:true
}
))

mongoose.connect("mongodb+srv://sukumar:Sukumar!23@cluster0.q7zj5dm.mongodb.net/crud")

app.post("/register",(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>res.json(err))
})

app.post("/login",(req,res)=>{
    const {email,password}=req.body 
    console.log(email);
    console.log(password);
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }
            else{
                res.json("password incorrect")
            }
        }else{
            res.json("no recored registered")
        }
    })
})




app.listen(3004,()=>{
    console.log("server is running")
})
