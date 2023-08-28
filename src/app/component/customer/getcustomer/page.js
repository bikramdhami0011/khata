"use client"
import "@/app/page.module.css"

import Link from 'next/link';
import { useEffect, useState } from 'react';


 function  GetCustomer() {
  const [customerName, setCustomerName] = useState('');
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    const storedCustomerList = localStorage.getItem('customerList');
    if (storedCustomerList) {
      setCustomerList(JSON.parse(storedCustomerList));
    }
  }, []);

  const handleInputChange = (event) => {
    setCustomerName(event.target.value);
  };
  
  const handleSave = () => {
    if (customerName) {
      const newCustomerList = [...customerList, customerName];
      localStorage.setItem('customerList', JSON.stringify(newCustomerList));
      setCustomerList(newCustomerList);
      setCustomerName('');
      alert('Customer name saved in local storage.');
    } else {
      alert('Please enter a customer name.');
    }
  };

  const handleCustomerClick = (name,index) => {
  
     return <Link href={"/customer/customerdetail"}>{name}</Link>
  };

  return (
    <div style={{display:"flex" ,flexDirection:"column"}}>
      <h1>Customer</h1>
      <div style={{display:"flex" ,flexDirection:"column" ,heigh:"400px" ,width:"400px"}} >
      <input
        type="text"
        style={{height:"40px"}}
        placeholder="Enter customer name"
        value={customerName}
        onChange={handleInputChange}
      />
      <button onClick={handleSave} style={{backgroundColor:"blue" ,height:"25px"}}>Save </button>
      </div>

      
      <div style={{height:"600px"}}>
        <h2>Customer List</h2>
        <ul>
          {customerList.map((customer, index) => (
            <li key={index} onClick={() => handleCustomerClick(customer,index)}>
                    
                   <Link href={`/customer/${index}`} style={{outlineColor:"white" ,color:"black",textDecoration:"none" ,columnGap:"3rem" ,marginTop:"4px" }}> {customer}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default GetCustomer;
