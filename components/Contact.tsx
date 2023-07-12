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
    <div className="flex flex-col items-center justify-center bg-[url('/images/polygons.svg')] bg-fixed bg-cover bg-no-repeat w-full">
      <p className="p-4 text-xl drop-shadow font-body text-theme-gray-medium">
        Please get in touch if you are interested in my work!
      </p>
      <ToastContainer />
      <form
        onSubmit={sendEmail}
        id="contact-form"
        className="flex flex-col items-center justify-center gap-8 p-4 max-w-[40rem] w-full"
      >
        <div className="relative w-full">
          <input
            type="text"
            required
            placeholder="Name"
            className="w-full px-4 py-2 pl-10 rounded shadow"
            onChange={handleNameChange}
            value={name}
          />

          <FontAwesomeIcon
            icon={faUser}
            className="absolute top-[50%] -translate-y-[50%] left-3"
          />
        </div>

        <div className="relative w-full">
          <input
            type="email"
            required
            placeholder="Email Address"
            className="w-full px-4 py-2 pl-10 rounded shadow"
            onChange={handleEmailChange}
            value={email}
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="absolute top-[50%] -translate-y-[50%] left-3"
          ></FontAwesomeIcon>
        </div>

        <div className="relative w-full">
          <textarea
            rows={4}
            required
            placeholder="Message"
            className="w-full px-4 py-2 pl-10 rounded shadow"
            onChange={handleMessageChange}
            value={message}
          ></textarea>
          <FontAwesomeIcon
            icon={faMessage}
            className="absolute top-3 left-3"
          ></FontAwesomeIcon>
        </div>
        <div>
          <button
            className="px-8 py-4 text-xl font-bold text-white transition-all duration-300 rounded-lg hover:bg-theme-blue-dark bg-theme-blue"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              "Sending . . ."
            ) : (
              <>
                Send <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
