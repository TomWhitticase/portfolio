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

  const [loading, setLoading] = useState(false);

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
    setLoading(true);

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
        setLoading(false);
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
        setLoading(false);
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
    <div className="dark:text-gray-veryLight bg-[url('/images/polygons.svg')] dark:bg-[url('/images/polygons-dark.svg')] bg-fixed bg-cover bg-no-repeat w-full">
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
            className="w-full p-2 pl-8 shadow-lg dark:bg-gray-medium"
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
            className="w-full p-2 pl-8 shadow-lg dark:bg-gray-medium"
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
            className="w-full p-2 pl-8 shadow-lg dark:bg-gray-medium"
            onChange={handleMessageChange}
            value={message}
          ></textarea>
          <FontAwesomeIcon
            icon={faMessage}
            className="absolute top-4 left-2"
          ></FontAwesomeIcon>
        </div>
        <div>
          {loading ? (
            <button
              type="button"
              className="btn-1 flex items-center w-44"
              disabled={true}
            >
              <svg
                className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </button>
          ) : (
            <button className="btn-1 w-44" type="submit">
              Send <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
