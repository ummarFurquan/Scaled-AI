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
            <div className="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3097.9705458099193!2d-77.4943377!3d39.0615854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b63c202e1caabd%3A0x2e57f8fbf3664894!2s20029%20Presidents%20Cup%20Terrace%2C%20Ashburn%2C%20VA%2020147%2C%20USA!5e0!3m2!1sen!2sin!4v1718785623873!5m2!1sen!2sin"
                width="600"
                title="Scaled AI INC"
                height="450"
                style={{ border: '0' }}
                loading="lazy"
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
