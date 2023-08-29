"use client"
import { useRouter } from "next/navigation";

import "../../page.module.css"

const Navbar=()=>{
    const router=useRouter();
    return <div>
         
          <div className="Navbar"  style={{ display:"flex" , backgroundColor:"rgb(1,135,95)",textDecoration:"none" ,textAnchor:"start"  ,height:"4rem" ,justifyContent:"center" ,justifyItems:"center",color:"white" ,position:"sticky"}}>
              
                 <ul  style={{display:"flex" ,flexDirection:"row",gap:"4rem" ,listStyleType:"none" ,justifyContent:"center" , justifyItems:"center",marginTop:"1rem"}}>
                    
                     <li onClick={()=>{
                          router.push("/")
                     }}
                     style={{cursor:"pointer"}}
                     > 
                        Shop
                     </li>
                     <li onClick={()=>{
                          router.push("../component/customer")
                     }}  style={{cursor:"pointer"}}> 
                        Customer
                     </li>
                     <li onClick={()=>{
                          router.push("../component/contactus")
                     }}
                     style={{cursor:"pointer" }}> 
                        Contact Us
                     </li>
                     
                 </ul>
            
          </div>
    </div>
}
export default Navbar;