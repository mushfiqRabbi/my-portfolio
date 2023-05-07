import Heading from "./Heading";
import BodyText from "./BodyText";
import WorkCards from "./WorkCards";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WorksSection() {
  return (
    <section className="py-20 lg:pt-28 px-6 mx-auto" id="works">
      <header className="lg:max-w-6xl mx-auto">
        <Heading value={2} className="md:text-[32px] text-slate-700">
          My Recent Work
        </Heading>
      </header>
      <BodyText
        value={1}
        className="md:text-xl md:px-28 lg:max-w-6xl mx-auto text-slate-600 mt-6"
      >
        I am proud to present some of my recent works that highlight my
        expertise in web development, and cutting-edge technologies.
      </BodyText>
      <WorkCards />
      <Heading
        value={3}
        className="mx-auto w-fit mt-20  text-[#3362cc] font-semibold group cursor-pointer "
      >
        <div className="border-b border-transparent group-hover:border-[#3362cc]">
          <a href="#">
            <div className="flex items-center relative top-1 group-hover:-top-[2px] transition-[top] duration-100 ease-in-out -z-10 group-hover:z-10">
              <p className="px-2 ">View more on github</p>
              <FontAwesomeIcon
                icon={faArrowRightLong}
                shake
                className="mt-px w-6"
              />
            </div>
          </a>
        </div>
      </Heading>
    </section>
  );
}
