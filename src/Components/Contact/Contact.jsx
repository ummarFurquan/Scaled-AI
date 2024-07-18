import React, { useState } from "react";
import { isEmail } from "validator";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.css";
import { contactsData } from "../../data/contactsData";

const Contact = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);

  const handleContactForm = (e) => {
    e.preventDefault();
    // const before = new Date().getSeconds();
    if (name && email && message) {
      if (isEmail(email)) {
        const responseData = {
          name: name,
          email: email,
          message: message,
        };

        axios.post(contactsData.sheetAPI, responseData).then((res) => {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false)
          }, 3000)
          setName("");
          setEmail("");
          setMessage("");

          toast.success("We've received your message!");
        });

        //to calculate the time taken for the function to excecute!
        // const after = new Date().getSeconds();

        // const result = before - after;

        // console.log('time taken is', result,'seconds')
      } else {
        toast.error("invalid Email");
      }
    } else {
      toast.error("Enter all the input field");
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
              <form className="contact-form" onSubmit={handleContactForm}>
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
                  name="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  name="Message"
                  cols="20"
                  rows="15"
                  placeholder="Your Queries/Message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit" className="send-button">
                  <span>{!success ? "Send" : "Sent"}</span>
                </button>
              </form>
            </div>
            <div className="map-container" style={{overflow:'hidden'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.9942602959904!2d-77.54960372463077!3d39.10660083433411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b63d7628db55db%3A0x9e90454059ba6548!2s722%20E%20Market%20St%20STE%20102%20OFC%20A69%2C%20Leesburg%2C%20VA%2020176%2C%20USA!5e0!3m2!1sen!2sin!4v1720816059436!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} title="ScaledAI Map"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            </div>
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
      />
    </>
  );
};

export default Contact;
