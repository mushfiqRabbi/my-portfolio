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
      <article className="lg:container mx-auto lg:max-w-5xl">
        <BodyText
          value={2}
          className="md:px-28 md:text-xl text-slate-200 lg:mt-8 lg:text-xl"
        >
          I am a full-stack web developer with a degree in computer science. I
          specialize in using MongoDB, Express.js, React.js, and Node.js to
          create scalable and efficient full-stack applications. I have a
          passion for creating visually appealing and dynamic user interfaces
          using React.js. With my knowledge of back-end development using
          Node.js and Express.js, I can build robust server-side logic and APIs.
          I am constantly learning and keeping up-to-date with the latest trends
          in web development.
        </BodyText>
      </article>
    </section>
  );
}
