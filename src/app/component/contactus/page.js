// pages/contact.js
"use client"
import React, { useState } from 'react';
import styles from "@/app/page.module.css" // Import CSS module

const ContactPage = () => {



  const [name, setname] = useState(null)
  const [email, setemail] = useState(null)
  const [message, setmessage] = useState(null)


  const handleSubmit = async () => {
    
    if (name == null) {
      alert("enter a name");
      
    } else {
      if (email == null) {
        alert("enter a email")
      }
    }
    if (message == null) {
      alert("enter a message")

    }
    else{ 
      const methodfetch = await fetch("http://localhost:3000/router", {
        method: "POST",
        body: JSON.stringify({ name, email, message })
      })
      const data = await methodfetch.json();
      console.log(data);
      if (data.success == true) {
        alert("the message is sent successfully ")
      }
    } 
   






    //
  };



  return (
    <div> {/* Use the CSS module class */}
      <h1>Contact Us</h1>
      <div className={styles.ContactPage} style={{ height: "300px", width: "400px" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", justifyItems: "center", textAlign: "center", outline: "none" }}>
          <input type='text' placeholder='enter name' required onChange={(e) => {
            setname(e.target.value)
          }} value={name} style={{ outline: "none" }} />
          <input type='email' placeholder='enter email' required onChange={(e) => {
            setemail(e.target.value)
          }} value={email} style={{ outline: "none" }} />
          <textarea type='text' required placeholder='enter a message' onChange={(e) => {
            setmessage(e.target.value)
          }} value={message} style={{ outline: "none" }} />
          <button onClick={handleSubmit} style={{ backgroundColor: "blue", color: "white" }}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
