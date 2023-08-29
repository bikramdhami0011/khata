// import { Dbcon } from "@/dbcon/dbcon";
// import mongoose from "mongoose";
import { CDmodule } from "@/dbcon/Cdmodel";
import { Dbcon } from "@/dbcon/dbcon";
import { Cddetail } from "@/dbcon/dbdetail";
import { CSmodule } from "@/dbcon/dbmodule";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

 export  async function GET (){
    // const data=await req.json()
    // console.log(data)
     await mongoose.connect(Dbcon);
     const modelr=await CSmodule;
     const data= await modelr.find();
     

console.log(data);
  return NextResponse.json({data,success:true})
}
export async function POST (req){
  await mongoose.connect(Dbcon);

  const modelr=await CSmodule;

  const data=await req.json();
  const result=await new modelr({name:data.name,email:data.email,message:data.message})
 const saved= await result.save();
  console.log(data.name);
  //connect with customer details

  return NextResponse.json({ success:true})
 
}