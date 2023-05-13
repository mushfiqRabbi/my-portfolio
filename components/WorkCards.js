import WorkCard from "./WorkCard";

const workData = [
  {
    shortDescription:
      "A portfolio project created with Next.js and Tailwind CSS, combining the power of a React framework and a utility-first CSS framework to build a modern and responsive portfolio website.",
    githubLink: "https://github.com/mushfiqRabbi/my-portfolio",
    imagePath: "/work-one.jpg",
  },
  {
    shortDescription:
      "A project utilizing Express.js and Passport.js to implement session-based authentication for secure user login and session management.",
    githubLink:
      "https://github.com/mushfiqRabbi/simple-session-based-authentication",
    imagePath: "/lock_two.jpg",
  },
  {
    shortDescription:
      "A dice game project implemented using HTML, CSS, and JavaScript to simulate rolling dice and track scores in a fun and interactive manner.",
    githubLink: "https://github.com/mushfiqRabbi/dice-game",
    imagePath: "/dice_one.jpg",
  },
  {
    shortDescription:
      "An authentication project using Express.js and JSON Web Tokens (JWT) for secure user authentication and authorization, enabling token-based authentication for protected routes.",
    githubLink:
      "https://github.com/mushfiqRabbi/simple-authentication-using-JWT",
    imagePath: "/lock_one.jpg",
  },
];

export default function WorkCards() {
  return (
    <div className="mt-14 px-2 grid place-items-center gap-7 md:grid-cols-2 lg:grid-cols-3 lg:mt-20 mx-auto max-w-lg md:max-w-4xl lg:max-w-6xl 2xl:max-w-[86rem]">
      <WorkCard workData={workData[0]} />
      <WorkCard workData={workData[1]} />
      <WorkCard workData={workData[2]} />
      <WorkCard workData={workData[3]} />
    </div>
  );
}
