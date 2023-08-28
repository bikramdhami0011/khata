 "use client"
 import { useState } from "react";
const Customers=()=>{
    const [customerName, setCustomerName] = useState('');
  
    const handleInputChange = (event) => {
      setCustomerName(event.target.value);
    };
    
    const handleSave = () => {
      if (customerName) {
        localStorage.setItem('customerName', customerName);
        alert('Customer name saved in local storage.');
      } else {
        alert('Please enter a customer name.');
    }
};
    return <div>
         <h1> this is customer</h1>
         <div>
      <h1>Customer</h1>
      <input
        type="text"
        placeholder="Enter customer name"
        value={customerName}
        onChange={handleInputChange}
      />
    <button onClick={handleSave} style={{backgroundColor:"blue"}}>Save </button>
    </div>

    </div>
}
export default Customers;