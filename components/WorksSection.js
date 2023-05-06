import Heading from "./Heading";
import BodyText from "./BodyText";
import WorkCards from "./WorkCards";

export default function WorksSection() {
  return (
    <section className="mt-20 lg:mt-32 px-6 mx-auto" id="works">
      <header className="lg:max-w-6xl mx-auto">
        <Heading value={2} className="md:text-[32px] text-slate-700">
          My Recent Work
        </Heading>
      </header>
      <BodyText
        value={1}
        className="md:text-xl md:px-28 lg:max-w-6xl mx-auto text-slate-600 mt-6 "
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
        consequatur deserunt recusandae saepe fuga velit.
      </BodyText>
      <WorkCards />
    </section>
  );
}
