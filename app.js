const express =require("express");
const mongoose = require('mongoose');
const path =require("path");
const { User } = require("./models/userModel");
require("dotenv").config()
app = express();

app.use(express.json())
app.use(express.urlencoded({}))
// User
// app.use(express.static(path.join(__dirname, 'public')))
// app.use("/")
app.get('/index', function(req, res){
    res.sendFile(path.join(__dirname, 'public' , 'index.html'));
  });
app.post("/signup",async (req,res)=> {
    
const {name,name1,name2,name3,name4}=req.body;


const dataSaver= new User({email:name,name:name1});
const saver = await dataSaver.save();
res.send(saver);
})

app.listen(5000,function(){

    console.log('Server is running')
});