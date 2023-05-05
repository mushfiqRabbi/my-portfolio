import Heading from "./Heading";
import BodyText from "./BodyText";

export default function IntroSection() {
  return (
    <section
      className="bg-[#407BFF] text-white px-6 lg:pt-36 pt-20"
      id="skills"
    >
      <header className="lg:container mx-auto lg:max-w-6xl">
        <Heading value={2} className=" md:text-[32px] text-slate-100">
          Hi, I'm Mushfiq. Nice to meet you.
        </Heading>
      </header>
      <article className="lg:container mx-auto lg:max-w-6xl">
        <BodyText
          value={2}
          className="md:px-28 md:text-xl text-slate-200 lg:mt-8"
        >
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
