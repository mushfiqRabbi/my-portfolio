import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BodyText from "./BodyText";
import Heading from "./Heading";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function Contact() {
  const form = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        "service_da6szrm",
        "template_eera7da",
        form.current,
        "JZTSy4PjC3ca5wKNt"
      );
      console.log(result.text);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="pt-20 px-6 lg:container mx-auto" id="contact">
      <header>
        <Heading value={2} className="md:text-[32px]">
          Get in touch
        </Heading>
      </header>
      <BodyText value={2} className="md:text-xl md:px-28">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
        commodi?
      </BodyText>
      <div className=" lg:flex lg:justify-evenly lg:p-20 xl:ml-28 lg:gap-8 lg:pr-8">
        <div className="px-7 rounded-xl bg-[#263238]  mt-14 flex flex-col items-center py-11 text-white md:w-3/4 mx-auto lg:m-0 lg:max-w-md">
          <header className="text-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="bg-[#4bc190] rounded-full h-8 w-8 p-4"
            ></FontAwesomeIcon>
            <Heading value={2} className="mt-5 md:text-2xl">
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
                className="border border-[#4bc190] rounded-3xl w-fit mx-auto text-white px-8 py-2 uppercase font-medium tracking-widest mt-6 mb-2 md:text-[18px]"
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
          className="hidden lg:block lg:w-[400px] xl:w-[512px]"
        />
      </div>
    </section>
  );
}
