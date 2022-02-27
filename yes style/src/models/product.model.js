const mongoose= require("mongoose");

const productSchema =new mongoose.Schema({
    "name":{type:String,required:true},
    "price":{type:String,required:true},
    "in_stock":{type:Boolean,required:true},
    "currency":{type:String,required:true},
    "brand":{type:String,required:true},
    "description":{type:String,required:true},
    "images":{type:String,required:true},
    "gender":{type:String,required:true}

},
{
    versionKey:false
}
);
module.exports=mongoose.model("products",productSchema);
