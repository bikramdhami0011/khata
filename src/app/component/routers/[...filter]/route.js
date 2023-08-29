import { CDmodule } from "@/dbcon/Cdmodel";
import { Cddetail } from "@/dbcon/dbdetail";
import mongoose from "mongoose";

import { NextResponse } from "next/server";

export async function GET(req,context){
       const  customer= context.params.filter[1];
       await mongoose.connect(Cddetail);
    const modelr2= await CDmodule.find();
        const filter=modelr2.filter((e)=>{
            return e.customerName==customer;
        })
    //    console.log(filter);

    
    return NextResponse.json({filter,success:true})
} 