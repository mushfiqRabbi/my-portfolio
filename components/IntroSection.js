import Heading from "./Heading";
import BodyText from "./BodyText";

export default function IntroSection() {
  return (
    <section
      className="bg-[#407BFF] text-white px-6 lg:pt-28 pt-20"
      id="skills"
    >
      <header className="lg:container mx-auto lg:max-w-6xl">
        <Heading value={2} className=" md:text-[32px] text-slate-100">
          Hi, I'm Mushfiq.<pre className="md:hidden"></pre> Nice to meet you.
        </Heading>
      </header>
      <article className="lg:container mx-auto lg:max-w-5xl">
        <BodyText
          value={1}
          className="md:px-28 md:text-xl text-slate-200 lg:mt-8 lg:text-xl mt-6"
        >
          I am a full-stack web developer with a background in computer science.
          I have a passion for creating visually appealing and dynamic user
          interfaces using React. Also with my knowledge of back-end development
          using Node.js and Express.js, I can build robust server-side logic and
          APIs. I am constantly learning and keeping up-to-date with the latest
          trends in web development.
        </BodyText>
      </article>
      <div className="flex flex-col md:flex-row gap-5 w-fit mx-auto text-center mt-12 ">
        <a
          href="#contact"
          className="border bg-[rgba(255,255,255,0.09)] rounded-full  text-slate-200 px-8 py-2 uppercase tracking-wide md:text-[18px] hover:bg-slate-200 transition-colors duration-300 ease-in-out hover:text-slate-800 font-bold active:animate-ping"
        >
          Hire Me
        </a>
        <a
          href="https://drive.google.com/file/d/1NCkD-bOv-V0zKKc3XNMty4wOhFB_sx5w/view?usp=share_link"
          target="_blank"
          className="border bg-[rgba(255,255,255,0.09)] rounded-full  text-slate-200 px-8 py-2 uppercase  tracking-wide md:text-[18px] hover:bg-slate-200 transition-colors duration-300 ease-in-out hover:text-slate-800 font-bold active:animate-ping"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
