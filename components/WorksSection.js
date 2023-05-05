import Heading from "./Heading";
import BodyText from "./BodyText";
import WorkCards from "./WorkCards";

export default function WorksSection() {
  return (
    <section className="mt-20 px-6" id="works">
      <header>
        <Heading value={2} className="md:text-[32px]">
          My Recent Work
        </Heading>
      </header>
      <BodyText value={2} className="md:text-xl md:px-28">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
        consequatur deserunt recusandae saepe fuga velit.
      </BodyText>
      <WorkCards />
    </section>
  );
}
