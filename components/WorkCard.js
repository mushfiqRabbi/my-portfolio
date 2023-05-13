import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WorkCard({
  workData: { shortDescription, githubLink, imagePath },
}) {
  return (
    <div className="w-full h-auto rounded-2xl overflow-hidden relative group drop-shadow-md">
      <div className="h-full w-full bg-[#263238] px-6 py-9 text-center text-slate-300 flex flex-col justify-evenly gap-4 absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <p>{shortDescription}</p>
        <a
          className="capitalize font-semibold border rounded-full border-[#4bc190] px-6 py-2 w-fit mx-auto flex items-center gap-2 bg-[rgba(75,193,144,0.2)]  hover:bg-[#4bc190] hover:text-slate-700 transition-colors ease-in-out duration-300 active:animate-ping group"
          href={githubLink}
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
          <p>view</p>
          <FontAwesomeIcon icon={faAngleRight} />
        </a>
      </div>
      <div className="w-full h-auto group-hover:scale-125 transition-transform duration-500 ease-in-out relative">
        <div className="absolute h-full w-full"></div>
        <Image
          src={imagePath}
          height="512"
          width="512"
          alt="work one image"
          className="aspect-[1.5]"
        />
      </div>
    </div>
  );
}
