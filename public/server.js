const express=require('expris');
const booksRouter = require('./router/bookRouter');
const db = requier('./db');
const mongoose = require("mongoose");
const app = express();
app.use('books', booksRouter);
app.listen(8000, () =>{
  console.log('sam3k 3la port 8000');
});
const uri =
  "mongodb+srv://user:user@database.lvgh866.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(8000, () => {
  console.log("Server started on port 8000");
});

app.post("/sign_up"),(req,res) => {
    var name0= req.body.name0
    var name1=req.body.name1
    var name2=req.body.name2
    var name3=req.body.name3
    var name4=req.body.name4
    var name5=req.body.name5
    var name6= req.body.name6
    var name7=req.body.name7
    var name8=req.body.name8
    var name9=req.body.name9
    var name10=req.body.name10

    var data={
        "name0":name0,
        "name1":name1,
        "name2":name2,
        "name3":name3,
        "name4":name4,
        "name5":name5,
        "name6":name6,
        "name7":name7,
        "name8":name8,
        "name9":name9,
        "name10":name10,
    }}