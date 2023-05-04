import WorkCard from "./WorkCard";

export default function WorkCards() {
  return (
    <div className="mt-14 px-2 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
    </div>
  );
}
