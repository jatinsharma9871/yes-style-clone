const express=require("express");
const router =express.Router();
const Product =require("../models/product.model");


 router.post("",async (req,res) =>{
    try{ 
        const result = await Product.find().limit(200).lean().exec();
        let search = req.body.search;
        let product=[];
        result.map(function(elm){
          elm.name.toLowerCase();
          
          if(elm.name.toLowerCase().split(" ").includes(search)){
            product.push(elm);
            return ;            
          }
          elm.brand.toLowerCase();
          if(elm.brand.split(" ").includes(search)){
            product.push(elm);
            return ;            
          }
          elm.gender.toLowerCase();
          if(elm.gender.split(" ").includes(search)){
            product.push(elm);
            return ;            
          }
          
        });
        return res.render("products/search.ejs",{product}); 
    }catch(err){
        return res.send(err.message)
        }
    });

router.get("",async (req,res)=>{
  try{
    let gender = req.query.gender;
    const page =parseInt(req.query.page) || 1;
    const size = req.query.size || 15;
    const product =await Product.find({gender:gender}).skip((page - 1) * size).limit(size).lean().exec();
    return res.render("products/product.ejs",{product,gender,page}); 
  }catch(err){
    return res.send(err.message);
  }
})
router.get("/index",async (req,res)=>{
  try{
    return res.render("products/index.ejs"); 
  }catch(err){
    return res.send(err.message);
  }
})
router.get("/description/:id",async (req,res)=>{

  try{

    const product = await Product.findById(req.params.id).lean().exec();
    const similar = await Product.find({brand:product.brand}).limit(6).lean().exec();
    let imgarr = product.images.split("~");
    let img = parseInt(req.query.img) || 0;
    if(img<0){
      img=0;
    }
    img = (img % imgarr.length);
    return res.render("products/addtobag.ejs",{product,img,similar}); 
  }catch(err){
    return res.send(err.message);
  }
})
router.post("/search",async (req,res)=>{
  try{
    console.log(req.body);
    return res.render("products/product.ejs"); 
  }catch(err){
    return res.send(err.message);
  }
})
router.get("/cart",async (req,res)=>{
  try{

    return res.render("products/cart.ejs"); 
  }catch(err){
    return res.send(err.message);
  }
})
router.get("/help",async (req,res)=>{
  try{

    return res.render("products/help.ejs"); 
  }catch(err){
    return res.send(err.message);
  }
})
router.get("/signin",async (req,res)=>{
  try{

    return res.render("products/signin.ejs"); 
  }catch(err){
    return res.send(err.message);
  }
})
router.get("/blog",async (req,res)=>{
  try{

    return res.render("products/blog.ejs"); 
  }catch(err){
    return res.send(err.message);
  }
})
router.get("/bag",async (req,res)=>{
  try{

    return res.render("products/bag.ejs"); 
  }catch(err){
    return res.send(err.message);
  }
})
router.get("/checkout",async (req,res)=>{
  try{

    return res.render("products/checkout.ejs"); 
  }catch(err){
    return res.send(err.message);
  }
})
router.get("/pay",async (req,res)=>{
  try{

    return res.render("products/pay.ejs"); 
  }catch(err){
    return res.send(err.message);
  }
})




module.exports=router;