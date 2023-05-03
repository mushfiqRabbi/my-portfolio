import Image from "next/image";
import BodyText from "./BodyText";
import Heading from "./Heading";
import {
  faFacebookF,
  faWhatsapp,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function FooterSection() {
  return (
    <footer className=" bg-[#407BFF] py-20 text-white px-4">
      <Heading value={2}>Let's get social</Heading>
      <BodyText value={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
        recusandae.
      </BodyText>
      <ul className="flex w-fit gap-3 mx-auto my-10">
        <li>
          <a href="#">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="h-5 w-5 p-3 rounded-full border border-slate-300 inline-block"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="h-5 w-5 p-3 rounded-full border border-slate-300 inline-block"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="h-5 w-5 p-3 rounded-full border border-slate-300 inline-block"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon
              icon={faGithub}
              className="h-5 w-5 p-3 rounded-full border border-slate-300 inline-block"
            />
          </a>
        </li>
      </ul>
      <p className="text-center font-light tracking-wide mb-4">
        Handcrafted by me
        <span className="text-2xl font-extralight align-middle px-[2px]">
          &copy;
        </span>
        mushfiqurRahman
      </p>
      <div className="flex items-center gap-2 w-fit mx-auto">
        <p className="text-[10px] tracking-wider font-light">Created using</p>
        <Image src="/Nextjs-logo.svg" height={70} width={90} />
      </div>
    </footer>
  );
}
