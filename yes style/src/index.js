const express =require("express");
const connect=require("./configs/db");
require("dotenv").config();
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const productController=require("./controllers/product.controller");
app.use("/products",productController);
app.get("/", async(req, res)=>{
    try{
        return res.render("products/index.ejs");
    }
    catch(err){
      return res.send(err.message);
    }
  })

app.set("view engine","ejs");
app.set("views")

app.use(express.static("public"));
app.listen(process.env.PORT || 5500,async () =>{
    try{
        await connect();
    console.log("listening on port 5500");
    }
    catch(err){
        console.log(err.message);
    }
});