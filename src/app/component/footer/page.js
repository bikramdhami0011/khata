"use client"
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import "@/app/component/page.module.css"
import { useRouter } from "next/navigation";
const Privacy = () => {
    const router=useRouter()
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__section" style={{ display: "flex", flexDirection: "column", height: "6rem", marginTop: "5rem" }}>
                    <h3>Contact Us</h3>
                    <p>bhimdatta-18, Mahendranagar, Nepal</p>
                    <p>Email: bikramdhami296@gamil.com</p>
                    <p>Phone:9766987683</p>
                </div>
                <div className="footer__section" style={{height:"10vh",width:"100%"}}>
                    <h3>Connect with Us</h3>
                    <div className="social-icons" style={{color:"rgb(0,123,255)" , gap:"3rem",rowGap:"2rem" ,marginTop:"1rem",marginLeft:"10px"}}>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{marginRight:"0.5rem" ,height:"3rem"}}>
                            <FaFacebook className="icon" style={{height:"20px" ,color:"blue"}}/>
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="icon"  style={{height:"20px" ,marginLeft:"8px",color:"red"}}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer__bottom" style={{ display: "flex", backgroundColor: "rgb(52,53,65)", color: "white", height: "4rem", justifyContent: "center", alignItems: "center" ,marginTop:"4vh"}}>
                <div className="copyright">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </div>
                <div className="privacy-policy">
                    <a  style={{cursor:'pointer'}} onClick={(e)=>router.push("../component/footer/privacy")} >Privacy Policy</a> |                     <a  style={{cursor:'pointer'}} onClick={(e)=>router.push("../component/footer/termsofuser")} >Terms of User</a>
                </div>
            </div>
        </footer>
    );
};

export default Privacy;
