import { faCode, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "./Heading";
import BodyText from "./BodyText";

export default function SkillCard({
  data: { icon, headerText, bodyText, langList, techList, devTools },
  last,
}) {
  return (
    <article
      className={`flex flex-col items-center py-11 px-6 ${
        !last && "border-b"
      } `}
    >
      <header className="text-center">
        <FontAwesomeIcon
          icon={icon === "frontend" ? faCode : faTerminal}
          className="bg-[#4bc190] rounded-full h-8 w-8 p-4"
        />
        <Heading value={2} className="mt-5 md:text-2xl">
          {headerText}
        </Heading>
      </header>
      <BodyText value={2} className="md:text-[18px]">
        {bodyText}
      </BodyText>
      <Heading value={3} className="mt-10 text-[#3362cc] md:text-[18px]">
        Languages I speak
      </Heading>
      <ul className="flex flex-wrap justify-center mt-2 gap-1">
        <BodyText value={3} className="md:text-[18px]">
          {langList.map((lang, index) => {
            return (
              <li key={index}>{`${lang}${
                !(index + 1 === langList.length) ? "," : ""
              }`}</li>
            );
          })}
        </BodyText>
      </ul>
      <Heading value={3} className="mt-10 text-[#3362cc] md:text-[18px]">
        Technologies I use
      </Heading>
      <ul className=" flex flex-col mt-2 gap-1">
        <BodyText value={3} className="md:text-[18px]">
          {techList.map((tech, index) => {
            return <li key={index}>{`${tech}`}</li>;
          })}
        </BodyText>
      </ul>
      <Heading value={3} className="mt-10 text-[#3362cc] md:text-[18px]">
        Dev Tools:
      </Heading>
      <ul className=" flex flex-wrap justify-center mt-2 gap-1">
        <BodyText value={3} className="md:text-[18px]">
          {devTools.map((dt, index) => {
            return (
              <li key={index}>{`${dt}${
                !(index + 1 === devTools.length) ? "," : ""
              }`}</li>
            );
          })}
        </BodyText>
      </ul>
    </article>
  );
}
