const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://yesstyle:yesstyle@cluster0.tyean.mongodb.net/YESSTYLE?retryWrites=true&w=majority");
}