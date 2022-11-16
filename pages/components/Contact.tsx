import {
  faEnvelope,
  faMessage,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-[url('/images/polygons.svg')]  bg-fixed bg-cover bg-no-repeat w-full"
    >
      <form
        id="contact-form"
        className="flex flex-col justify-center items-center gap-8 child:max-w-[48rem] p-4"
      >
        <div className="relative w-full">
          <input
            type="text"
            id="name"
            required
            placeholder="Name"
            className="w-full p-2 pl-8 shadow-lg"
          />

          <FontAwesomeIcon
            icon={faUser}
            className="absolute top-[50%] -translate-y-[50%] left-2"
          />
        </div>

        <div className="relative w-full">
          <input
            type="email"
            id="emailAddress"
            required
            placeholder="Email Address"
            className="w-full p-2 pl-8 shadow-lg"
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="absolute top-[50%] -translate-y-[50%] left-2"
          ></FontAwesomeIcon>
        </div>

        <div className="relative w-full">
          <textarea
            id="message"
            rows={4}
            required
            placeholder="Message"
            className="w-full p-2 pl-8 shadow-lg"
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
