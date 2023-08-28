const { default: mongoose } = require("mongoose");

const CSschema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true},
    date: { type: Date, default: Date.now },

})
export const CSmodule= mongoose.models.contact||mongoose.model("contact",CSschema);