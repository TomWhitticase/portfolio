import {
  faEnvelope,
  faMessage,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (ev: any) => {
    setEmail(ev.target.value);
  };
  const handleNameChange = (ev: any) => {
    setName(ev.target.value);
  };
  const handleMessageChange = (ev: any) => {
    setMessage(ev.target.value);
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();

    let data = {
      name,
      email,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        toast.success("Message sent!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Something went wrong!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    });
  };

  return (
    <div className="bg-[url('/images/polygons.svg')]  bg-fixed bg-cover bg-no-repeat w-full">
      <ToastContainer />
      <form
        onSubmit={sendEmail}
        id="contact-form"
        className="flex flex-col justify-center items-center gap-8 child:max-w-[48rem] p-4"
      >
        <div className="relative w-full">
          <input
            type="text"
            required
            placeholder="Name"
            className="w-full p-2 pl-8 shadow-lg"
            onChange={handleNameChange}
            value={name}
          />

          <FontAwesomeIcon
            icon={faUser}
            className="absolute top-[50%] -translate-y-[50%] left-2"
          />
        </div>

        <div className="relative w-full">
          <input
            type="email"
            required
            placeholder="Email Address"
            className="w-full p-2 pl-8 shadow-lg"
            onChange={handleEmailChange}
            value={email}
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="absolute top-[50%] -translate-y-[50%] left-2"
          ></FontAwesomeIcon>
        </div>

        <div className="relative w-full">
          <textarea
            rows={4}
            required
            placeholder="Message"
            className="w-full p-2 pl-8 shadow-lg"
            onChange={handleMessageChange}
            value={message}
          ></textarea>
          <FontAwesomeIcon
            icon={faMessage}
            className="absolute top-4 left-2"
          ></FontAwesomeIcon>
        </div>
        <div>
          <button className="btn-1" type="submit">
            Send <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
          </button>
        </div>
      </form>
    </div>
  );
}
