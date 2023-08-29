"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

const CustomerLocalStorage = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerList, setCustomerList] = useState([]);

  // Load data from localStorage on initial render
  useEffect(() => {
    const storedCustomerList = localStorage.getItem('customerList');
    if (storedCustomerList) {
      setCustomerList(JSON.parse(storedCustomerList));
    }
  }, []);

  // Save data to localStorage whenever customerList changes
  useEffect(() => {
    localStorage.setItem('customerList', JSON.stringify(customerList));
  }, [customerList]);

  const addCustomer = () => {
    if (customerName.trim() !== '') {
      setCustomerList([...customerList, customerName]);
      setCustomerName('');
    }
  };

  return (
    <div>
      <h1>Customer List</h1>
      <div>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <button onClick={addCustomer}>Add Customer</button>
      </div>
      <ul>
        {customerList.map((name, index) => (
          
           <div> 
              {/* <li key={index}>{name}</li> */}
              <Link href={`./../component/customer/custlocalstore/${name}`}> {name}</Link>
           </div>
        
        ))}
      </ul>
    </div>
  );
};

export default CustomerLocalStorage;