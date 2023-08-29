const { default: mongoose } = require("mongoose");

const Cdschema=mongoose.Schema({
    customerName:{type:String,required:true},
    goods:{type:String,required:true},
    amount:{type:Number,required:true},
    date: { type: Date, default: Date.now() },

})
export const CDmodule= mongoose.models.cddetail||mongoose.model("cddetail",Cdschema);