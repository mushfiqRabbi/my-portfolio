import Heading from "./Heading";
import BodyText from "./BodyText";

export default function WorksSection() {
  return (
    <section className="mt-20 px-6">
      <header>
        <h2 className="font-bold">
          <Heading>My Recent Work</Heading>
        </h2>
        <p className="mt-6">
          <BodyText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            consequatur deserunt recusandae saepe fuga velit.
          </BodyText>
        </p>
      </header>
    </section>
  );
}
