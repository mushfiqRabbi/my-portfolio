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
          className="bg-[#48c092] rounded-full h-8 w-8 p-4"
        />
        <h2 className="mt-5">
          <Heading>{headerText}</Heading>
        </h2>
      </header>
      <p className="mt-6">
        <BodyText>{bodyText}</BodyText>
      </p>
      <h3 className="mt-10 font-normal text-lg text-[#2b61e0]">
        Languages I speak
      </h3>
      <ul className="flex flex-wrap justify-center mt-2 gap-1">
        <BodyText>
          {langList.map((lang, index) => {
            return (
              <li key={index}>{`${lang}${
                !(index + 1 === langList.length) ? "," : ""
              }`}</li>
            );
          })}
        </BodyText>
      </ul>
      <h3 className="mt-10 font-normal text-lg text-[#2b61e0]">
        Technologies I use
      </h3>
      <ul className=" flex flex-col mt-2 gap-1">
        <BodyText>
          {techList.map((tech, index) => {
            return <li key={index}>{`${tech}`}</li>;
          })}
        </BodyText>
      </ul>
      <h3 className="mt-10 font-normal text-lg text-[#2b61e0]">Dev Tools:</h3>
      <ul className=" flex flex-wrap justify-center mt-2 gap-1">
        <BodyText>
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
