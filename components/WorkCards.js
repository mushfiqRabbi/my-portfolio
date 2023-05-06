import WorkCard from "./WorkCard";

export default function WorkCards() {
  return (
    <div className="mt-14 px-2 grid gap-7 md:grid-cols-2 lg:grid-cols-3 lg:mt-20 mx-auto max-w-lg md:max-w-4xl lg:max-w-6xl 2xl:max-w-[86rem]">
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
    </div>
  );
}
