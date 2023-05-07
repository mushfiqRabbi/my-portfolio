import {
  faEnvelope,
  faSpinner,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BodyText from "./BodyText";
import Heading from "./Heading";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const form = useRef(null);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("sending");
    try {
      const result = await emailjs.sendForm(
        "service_da6szrm",
        "template_eera7da",
        form.current,
        "JZTSy4PjC3ca5wKNt"
      );
      setMessage("success");
      setTimeout(() => {
        setMessage(false);
        e.target.reset();
      }, 1000);
    } catch (error) {
      setMessage("failed");
      setTimeout(() => {
        setMessage(false);
      }, 1000);
    }
  }

  return (
    <section
      className="py-20 lg:pt-28 px-6  mx-auto bg-gradient-to-b from-white from-80% via-[#407BFF] via-80% to-[#407BFF] border-t"
      id="contact"
    >
      <header>
        <Heading value={2} className="md:text-[32px] text-slate-700 capitalize">
          get in touch
        </Heading>
      </header>
      <BodyText
        value={1}
        className="md:text-xl md:px-28 text-slate-600 mt-6 lg:max-w-6xl mx-auto"
      >
        Contact me directly via email to hire me or discuss your project or
        collaboration. Let's work together to build something great.
      </BodyText>
      <div className=" lg:flex lg:justify-center md:px-20 md:pt-20 xl:ml-24 lg:gap-10 xl:gap-24 items-center relative">
        <div
          className={`${
            message ? "flex" : "hidden"
          }  absolute z-10 w-full h-full justify-center items-center gap-4 bg-[rgba(0,0,0,0.7)]`}
        >
          <p className="text-slate-100 text-lg font-semibold uppercase tracking-wide">
            {message}
          </p>
          <FontAwesomeIcon
            icon={
              message === "success"
                ? faCircleCheck
                : message === "failed"
                ? faCircleXmark
                : faSpinner
            }
            className={`text-slate-100 w-5 h-5 ${
              message === "success"
                ? "text-emerald-500 -order-1"
                : message === "failed"
                ? "text-red-500 -order-1"
                : "animate-spin"
            }`}
          />
        </div>
        <div className="px-7 rounded-xl bg-[#263238]  mt-14 md:mt-0 flex flex-col items-center py-11 text-slate-100 mx-auto lg:m-0 drop-shadow-md max-w-md lg:min-w-[28rem]">
          <header className="text-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="bg-[#4bc190] rounded-full h-8 w-8 p-4 text-slate-700"
            ></FontAwesomeIcon>
            <Heading value={2} className="mt-5 md:text-2xl text-slate-200">
              Send Email
            </Heading>
          </header>
          <main className="mt-10 w-full ">
            <form
              className="flex flex-col gap-5"
              onSubmit={handleSubmit}
              ref={form}
            >
              <div className="flex flex-col">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                  className="border-b border-b-slate-600 px-2 py-1 mt-1 focus:outline-none focus:border-b-[#4bc190] bg-[#263238]"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                  className="border-b border-b-slate-600 px-2 py-1 mt-1 focus:outline-none focus:border-b-[#4bc190] bg-[#263238]"
                />
              </div>
              <div className="flex flex-col">
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Message !"
                  required
                  className="border-slate-600 border p-2 rounded-md  focus:outline-none mt-6 focus:border-[#4bc190] bg-[#263238] resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                value="Send"
                className="border border-[#4bc190] bg-[rgba(75,193,144,0.2)] rounded-3xl w-fit mx-auto text-slate-300 px-8 py-2 uppercase tracking-widest mt-6 mb-2 md:text-[18px] hover:bg-[#4bc190] transition-colors duration-300 ease-in-out hover:text-slate-700 font-bold active:animate-ping"
              >
                send
              </button>
            </form>
          </main>
        </div>
        <Image
          src="/email-me.svg"
          height={512}
          width={512}
          alt="lady holding envelop illustration"
          className="hidden lg:block lg:min-w-0"
        />
      </div>
    </section>
  );
}
