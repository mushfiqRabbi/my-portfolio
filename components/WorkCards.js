import WorkCard from "./WorkCard";

export default function WorkCards() {
  return (
    <div className="mt-14 px-2 grid gap-7 md:grid-cols-2 lg:grid-cols-3 lg:mt-20 lg:max-w-[86rem] mx-auto">
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
    </div>
  );
}
