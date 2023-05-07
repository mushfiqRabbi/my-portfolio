import SkillCard from "./SkillCard";

const cards = [
  {
    icon: "frontend",
    headerText: "Frontend Developer",
    bodyText:
      "Committed to creating visually stunning and user-friendly interfaces that inspire and engage users.",
    langList: ["HTML", "CSS", "Javascript"],
    techList: ["React.js", "Next.js", "Bootstrap", "Tailwind CSS", "Firebase"],
    devTools: ["VS Code", "Terminal", "Git", "Github", "Vim"],
    osList: ["Windows", "Linux"],
  },
  {
    icon: "backend",
    headerText: "Backend Developer",
    bodyText:
      "Committed to building robust and scalable server-side architectures that power exceptional user experiences.",
    langList: ["Javascript", "Node.js", "SQL", "NoSQL"],
    techList: ["Express.js", "Mongoose", "Pug", "EJS"],
    devTools: ["VS Code", "Terminal", "Git", "Github", "Vim"],
    osList: ["Windows", "Linux"],
  },
];

export default function SkillCards() {
  return (
    <div className="border rounded-xl bg-white drop-shadow-md md:flex max-w-lg md:max-w-[52rem] lg:container mx-auto lg:max-w-4xl ">
      <SkillCard data={cards[0]} />
      <SkillCard data={cards[1]} last={true} />
    </div>
  );
}
