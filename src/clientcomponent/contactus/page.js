// // pages/contact.js
// "use client"
// import React, { useState } from 'react';
// import styles from "@/app/page.module.css" // Import CSS module

// const ContactPage = () => {



//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async(e) => {

//     e.preventDefault();
//     const methodfetch= await fetch("http://localhost:3000/router",{
//       method:"GET",
//       body:JSON.stringify
//     })
//     const data= await methodfetch.json();

//     // Handle form submission logic here (e.g., sending an email, storing data)
//     console.log(formData,data);

//   };



//   return (
//     <div className={styles.contactPage}> {/* Use the CSS module class */}
//       <h1>Contact Us</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <label htmlFor="message">Message</label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ContactPage;
