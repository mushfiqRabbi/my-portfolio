import BodyText from "./BodyText";
import Heading from "./Heading";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function FooterSection() {
  return (
    <footer className="pb-20 lg:pt-8 bg-[#407BFF] text-white px-4" id="footer">
      <Heading value={2} className="md:text-[32px]  text-slate-100">
        Let's Get Social
      </Heading>
      <BodyText
        value={1}
        className="md:text-xl md:px-28  lg:container lg:max-w-6xl mx-auto text-slate-200 mt-6"
      >
        Find me on social media to discuss your project. Let's connect and
        collaborate!
      </BodyText>
      <ul className="flex w-fit gap-3 lg:gap-4 mx-auto my-10  lg:container lg:max-w-5xl justify-center">
        <li className="group active:animate-ping">
          <a href="https://www.facebook.com/pro.user.me" target="_blank">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="w-5 text-xl p-3 rounded-full border border-slate-300 inline-block group-hover:bg-slate-100 group-hover:text-[#407BFF] transition-colors ease-in-out duration-300"
            />
          </a>
        </li>
        <li className="group active:animate-ping">
          <a
            href="https://www.linkedin.com/in/mushfiqur-rahman-me/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="w-5 text-xl p-3 rounded-full border border-slate-300 inline-block group-hover:bg-slate-100 group-hover:text-[#407BFF] transition-colors ease-in-out duration-300"
            />
          </a>
        </li>
        <li className="group active:animate-ping">
          <a href="https://github.com/mushfiqRabbi" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="w-5 text-xl p-3 rounded-full border border-slate-300 inline-block group-hover:bg-slate-100 group-hover:text-[#407BFF] transition-colors ease-in-out duration-300"
            />
          </a>
        </li>
      </ul>
      <p className="text-center tracking-wide mb-4 md:text-[18px] lg:container lg:max-w-5xl mx-auto text-slate-100 font-extralight">
        Developed by
        <span className="text-xl font-thin align-middle pl-1 pb-1 inline-block">
          &copy;
        </span>
        mushfiqur_rahman
      </p>
      <p className="text-sm font-thin text-slate-200 text-center mt-6">
        Resource Credits
      </p>
      <ul className="text-center text-slate-300 text-xs font-thin">
        <li>
          Vectors and icons by{" "}
          <a href="https://www.svgrepo.com" target="_blank">
            SVG Repo
          </a>
        </li>
        <li>
          <a href="https://storyset.com/work" target="_blank">
            Work illustrations by Storyset
          </a>
        </li>
        <li>
          <a href="https://storyset.com/marketing" target="_blank">
            Marketing illustrations by Storyset
          </a>
        </li>
      </ul>
    </footer>
  );
}
