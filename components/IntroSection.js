import Heading from "./Heading";
import BodyText from "./BodyText";

export default function IntroSection() {
  return (
    <section className="bg-[#407BFF] text-white px-6" id="skills">
      <header>
        <Heading value={2} className="pt-20 md:text-[32px]">
          Hi, I'm Mushfiq. Nice to meet you.
        </Heading>
      </header>
      <article>
        <BodyText value={2} className="md:px-28 md:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut fuga
          fugit quo cumque molestias, distinctio illo molestiae. Praesentium
          ratione animi distinctio culpa hic cum sit quia molestias ex assumenda
          minima possimus modi ea necessitatibus laborum, cupiditate voluptate?
          Facere, in sapiente!
        </BodyText>
      </article>
    </section>
  );
}
