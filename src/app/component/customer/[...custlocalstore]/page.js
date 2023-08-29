
//
"use client"
import { useState } from "react";
import "@/app/component/customer/page.module.css"




const Customers=({params})=>{
  const  CName=params.custlocalstore[1];
  const newCName=CName.replace(/%20/," ")
  const longName=newCName.replace(/%20/," ")
 
   const [customerName, setCustomerName] = useState(longName);
   const [goods, setgoods] = useState('');
   const [amount, setamount] = useState('');
 
   const handleSave = async() => {

     const methodfetch = await fetch("http://localhost:3000/component/routers", {
       method: "POST",
       body: JSON.stringify({ customerName, goods, amount})
     })
     const data = await methodfetch.json();
     console.log(data);
     if (data.success == true) {
       alert("the message is sent successfully ")
     }
 
  
};


const [addamount, setaddamount]=useState(0)
const  GetDetials =async()=>{
     
      const getmethod = await fetch(`http://localhost:3000/component/routers/filter/${longName}`, {
        method: "GET",
      })
      const getdata = await getmethod.json();
      let i=0;
      const addamounts=getdata.filter;
 
      let sum=0;
while (i <= addamounts.length) {
 
      const data=getdata.filter[i].amount;
       sum=sum+data
    i++;
   
    setaddamount(sum)
    
}
      

}
const date=new Date();
const newdate=date.toLocaleDateString();


   return <div>
       
        <div>
     <h1>Customer</h1>
     <div> 

    
     <div  style={{display:"flex" ,flexDirection:"column", justifyContent:"center" ,justifyItems:"center" ,marginLeft:"30vw",marginRight:"30vw"}} >
          <div className="div" style={{display:"flex" ,flexDirection:"column", justifyContent:"center" ,justifyItems:"center" , width:"400px", textAlign:"center"}}>
          <input
       type="text"
       placeholder="Enter customer name"
       value={customerName}
       onChange={(e)=>{
         setCustomerName(e.target.value)
       }}
     />
        <input
       type="text"
       placeholder="Enter goods"
       value={goods}
       onChange={(e)=>{
         setgoods(e.target.value)
       }}
     />
        <input
       type="number"
       placeholder="Enter amount "
       value={amount}
       onChange={(e)=>{
         setamount(e.target.value)
       }}
     />
   <button onClick={handleSave} style={{backgroundColor:"blue"}}>Save </button>
          </div>
     </div>
     </div>
   </div>
      <div>
          <div>
               <h1> {longName} Details</h1>
       
            <button onClick={GetDetials} style={{backgroundColor:'blue' , color:"white" ,cursor:"pointer"}}>GET Details</button>   
               <h3> Name: {longName}</h3>
               <h4>Total Amount: {addamount}</h4>
               <h4>Last Date : {newdate}</h4>  
              
          </div>
      </div>
   </div>
}
export default Customers;
