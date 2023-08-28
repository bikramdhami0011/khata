"use client"
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import "@/app/component/page.module.css"
import { useRouter } from "next/navigation";
const CPrivacy = () => {
    const router=useRouter()
    return (
        <footer className="footer">
        <div>
             <h1> Pirvacy policy</h1>
             <p> <p>A privacy policy is a statement or legal document (in privacy law) that discloses some or all of the ways a party gathers, uses, discloses, and manages a customer or client's data.[1] Personal information can be anything that can be used to identify an individual, not limited to the person's name, address, date of birth, marital status, contact information, ID issue, and expiry date, financial records, credit information, medical history, where one travels, and intentions to acquire goods and services.[2] In the case of a business, it is often a statement that declares a party's policy on how it collects, stores, and releases personal information it collects. It informs the client what specific information is collected, and whether it is kept confidential, shared with partners, or sold to other firms or enterprises.[3][4] Privacy policies typically represent a broader, more generalized treatment, as opposed to data use statements, which tend to be more detailed and specific.

collecting Personally Identifiable Information () from California residents must conspicuously post their privacy policy.[5]x (See also Online Privacy Protection Act)</p></p>
        </div>
         <div>
             <h1>Terms of User</h1>
             <p>Some usability professionals have expressed their dislike of the term "user" and have proposed changing it.[9] Don Norman stated that "One of the horrible words we use is 'users'. I am on a crusade to get rid of the word 'users'. I would prefer to call them 'people'."[10]

The term "user" may imply lack of the technical expertise required to fully understand how computer systems and software products work.[11] Power users use advanced features of programs, though they are not necessarily capable of computer programming and system administration.[12][13]</p>
         </div>
        </footer>
    );
};

export default CPrivacy;
