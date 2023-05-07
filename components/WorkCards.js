import WorkCard from "./WorkCard";

const workData = {
  shortDescription:
    "Showcase skills, experience, and creativity in a tangible collection.",
  githubLink: "#",
  imagePath: "/work-one.jpg",
};

export default function WorkCards() {
  return (
    <div className="mt-14 px-2 grid place-items-center gap-7 md:grid-cols-2 lg:grid-cols-3 lg:mt-20 mx-auto max-w-lg md:max-w-4xl lg:max-w-6xl 2xl:max-w-[86rem]">
      <WorkCard workData={workData} />
    </div>
  );
}
