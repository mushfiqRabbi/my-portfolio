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
    <footer
      className=" bg-[#407BFF] py-20 text-white px-4 lg:mt-20 lg:relative"
      id="footer"
    >
      <Heading
        value={2}
        className="md:text-[32px] lg:absolute lg:bg-[#263238] lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/4 lg:py-8 lg:w-1/4 lg:rounded-xl"
      >
        Let's get social
      </Heading>
      <BodyText
        value={2}
        className="md:text-xl md:px-28  lg:container lg:max-w-5xl mx-auto"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
        recusandae.
      </BodyText>
      <ul className="flex w-fit gap-3 mx-auto my-10  lg:container lg:max-w-5xl justify-center">
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
      <p className="text-center font-light tracking-wide mb-4 md:text-[18px] lg:container lg:max-w-5xl mx-auto">
        Handcrafted by me
        <span className="text-2xl font-extralight align-middle px-[2px]">
          &copy;
        </span>
        mushfiqurRahman
      </p>
      <div className="flex items-center gap-2 w-fit mx-auto lg:container lg:max-w-5xl justify-center">
        <p className="text-[10px] tracking-wider font-light">Created using</p>
        <Image src="/Nextjs-logo.svg" height={70} width={90} />
      </div>
    </footer>
  );
}
