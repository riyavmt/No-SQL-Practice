const mongoose = require("mongoose");
// const { INTEGER } = require("sequelize");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  products:[{
    productData:{ type: Object , require:true},
    quantity:{type:Number , required:true}
  }],
  user:{
    name:{
      type:String,
      required:true
    },
    userId:{type: Schema.Types.ObjectId,required:true}
  }
  
})

module.exports = mongoose.model("Order",orderSchema)
