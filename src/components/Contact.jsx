import React from "react";
import ContactInfo from "./ContactInfo";
import { SiMinutemailer } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  const contacts = [
    { type: "Email", value: "anandh02102004@gmail.com", icon: <SiMinutemailer /> },
    { type: "Phone", value: "+91 91507 74853", icon: <FaPhoneAlt />},
    { type: "Location", value: "Pollachi, Tamil Nadu, India", icon: <FaLocationDot /> },
  ];
  return (
    <section id="contact">
      <h1>Contact</h1>
      <div id="contact-details">
        <ul>
          {contacts.map((contact,index)=>(
            <ContactInfo key={index} contact={contact}/>
          ))}
        </ul>
      </div>
    </section>
  );
}
