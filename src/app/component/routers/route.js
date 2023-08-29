import { CDmodule } from "@/dbcon/Cdmodel";
import { Cddetail } from "@/dbcon/dbdetail";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req){
    await mongoose.connect(Cddetail);
    const modelr2= await CDmodule;
    const data2=await req.json();
   
    const result2=await new modelr2({customerName:data2.customerName,goods:data2.goods,amount:data2.amount})
   const saved2= await result2.save();
 
    return NextResponse.json({saved2,success:true})
}

// export async function GET(req){
//     await mongoose.connect(Cddetail);
//     const modelr2= await CDmodule;
//     // const customer=await req.json();
//     const data2=await modelr2.find();

   
// //     const result2=await new modelr2({customerName:data2.customerName,goods:data2.goods,amount:data2.amount})
// //    const saved2= await result2.save();
 
//     return NextResponse.json({data2})
// }