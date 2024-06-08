import React, { useState } from "react";
import { isEmail } from "validator";
import { contactsData } from "../../data/contactData";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);
  const handleContactForm = (e) => {
    e.preventDefault();

    if (name && email && message) {
      if (isEmail(email)) {
        const responseData = {
          name: name,
          email: email,
          message: message,
        };

        axios.post(contactsData.sheetAPI, responseData).then((res) => {
          setSuccess(true);
            setName("");
          setEmail("");
          setMessage("");
          toast.success("We have recieved your message! Thank You");

          setTimeout(()=>{
            setSuccess(false)
          },2000);
        });
      } else {
        toast.error("Invalid Email, Try a valid One");
      }
    } else {
      toast.error("Enter all input fields");
    }
  };
  return (
    <>
      <div className="contain">
        <section>
          <div className="card-body">
            <h5
              className="card-title-header"
              style={{
                backgroundColor: "#dc3545",
                borderRadius: "10px",
                padding: "10px 10px 10px 10px",
                fontWeight: "700",
                color: "white",
              }}
            >
              CONTACT US
            </h5>
          </div>
          <div className="contact-container">
            <div className="form-container">
              <form
                action=""
                className="contact-form"
                onSubmit={handleContactForm}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  name="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  //   required
                  name="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  name="Message"
                  cols="20"
                  rows="15"
                  placeholder="Your Queries/Message..."
                  //   required
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit" className="send-button">
                  <span>{!success ? "Send" : "Sent"}</span>
                </button>
              </form>
            </div>
           

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5580151546988!2d77.61062057580538!3d12.936104383131662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1566cac890b5%3A0xc006690ced3721af!2sPvt%20Ltd!5e0!3m2!1sen!2sin!4v1717243988705!5m2!1sen!2sin"
                width="800"
                height="450"
                style={{ border: "0" }}
                title="Agilitnet"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          theme="dark"
          rtl={false}
          limit={1}
          draggable
          
        />
    </>
  );
};

export default Contact;
