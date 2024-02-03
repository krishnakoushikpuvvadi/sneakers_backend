const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId : {type: String,required :true},
   customerId : {type: String,required :true},
   productId : {
       type : mongoose.Schema.Types.ObjectId,
       ref: "Product"
   },
   quantity :{type :Number,required :true},
   subtotal : {type:Number,required: true},
   delivery_status: {type: String,requierd: true,  default: "pending"},
   payment_status: {type: String,requierd: true},
   total : {type:Number,required: true},

    
},{timestamps : true});

module.exports = mongoose.model("Orders",OrderSchema) 