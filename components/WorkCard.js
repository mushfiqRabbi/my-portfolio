import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FaGlobe } from "react-icons/fa";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WorkCard({
  workData: { shortDescription, link, linkType, imagePath },
}) {
  return (
    <div className="overflow-hidden relative w-full h-auto rounded-2xl group drop-shadow-md">
      <div className="h-full w-full bg-[#263238] px-6 py-9 text-center text-slate-300 flex flex-col justify-evenly gap-4 absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <p>{shortDescription}</p>
        <a
          className="capitalize font-semibold border rounded-full border-[#4bc190] px-6 py-2 w-fit mx-auto flex items-center gap-2 bg-[rgba(75,193,144,0.2)]  hover:bg-[#4bc190] hover:text-slate-700 transition-colors ease-in-out duration-300 active:animate-ping group"
          href={link}
          target="_blank"
        >
          {linkType === "repository" && <FontAwesomeIcon icon={faGithub} />}
          {linkType === "deployment" && <FaGlobe />}
          <p>{linkType === "deployment" ? "View Live" : "View Repo"}</p>
          <FontAwesomeIcon icon={faAngleRight} />
        </a>
      </div>
      <div className="relative w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-125">
        <div className="absolute w-full h-full"></div>
        <Image
          src={imagePath}
          height="512"
          width="512"
          alt="work image"
          className="object-cover aspect-[1.5]"
        />
      </div>
    </div>
  );
}
