const { default: mongoose } = require("mongoose");

const Cdschema=mongoose.Schema({
    name:{type:String,required:true},
    goods:{type:String,required:true},
    amount:{type:String,required:true},
    date: { type: Date, default: Date.now() },

})
export const CDmodule= mongoose.models.contact||mongoose.model("cddetail",Cdschema);