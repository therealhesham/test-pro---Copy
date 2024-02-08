require("dotenv").config()
const mongoose = require('mongoose');
// console.log(process.env)
mongoose.connect(`${process.env.MONGOString}/test`).then    (()=>console.log("connected "))
// "mongodb+srv://user:user@test-pro-db.pdeeivd.mongodb.net/?retryWrites=true&w=majority"
const userSchema =new mongoose.Schema({
name:String,
email:String

});

module.exports.User=  mongoose.model("user",userSchema);
