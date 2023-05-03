import Heading from "./Heading";
import BodyText from "./BodyText";

export default function WorksSection() {
  return (
    <section className="mt-20 px-6">
      <header>
        <Heading value={2}>My Recent Work</Heading>
        <BodyText value={2} className="mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          consequatur deserunt recusandae saepe fuga velit.
        </BodyText>
      </header>
    </section>
  );
}
