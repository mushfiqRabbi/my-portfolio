import Heading from "./Heading";
import BodyText from "./BodyText";

export default function IntroSection() {
  return (
    <section
      className="bg-[#407BFF] text-white px-6 lg:pt-28 pt-20"
      id="skills"
    >
      <header className="mx-auto lg:container lg:max-w-6xl">
        <Heading value={2} className="text-slate-100 md:text-[32px]">
          Hi, I'm Mushfiq.<pre className="md:hidden"></pre> Nice to meet you.
        </Heading>
      </header>
      <article className="mx-auto lg:container lg:max-w-5xl">
        <BodyText
          value={1}
          className="mt-6 md:px-28 md:text-xl lg:mt-8 lg:text-xl text-slate-200"
        >
          I am a full-stack web developer with a background in computer science.
          I have a passion for creating visually appealing and dynamic user
          interfaces using React. Also with my knowledge of back-end development
          using Node.js and Express.js, I can build robust server-side logic and
          APIs. I am constantly learning and keeping up-to-date with the latest
          trends in web development.
        </BodyText>
      </article>
      <div className="flex flex-col gap-5 mx-auto mt-12 text-center md:flex-row w-fit">
        <a
          href="#contact"
          className="border bg-[rgba(255,255,255,0.09)] rounded-full  text-slate-200 px-8 py-2 uppercase tracking-wide md:text-[18px] hover:bg-slate-200 transition-colors duration-300 ease-in-out hover:text-slate-800 font-bold active:animate-ping"
        >
          Hire Me
        </a>
        <a
          href="https://drive.google.com/file/d/1eRMa8HpClLUxhuyPi-cF22TvOkJ-e8Dn/view?usp=drive_link"
          target="_blank"
          className="border bg-[rgba(255,255,255,0.09)] rounded-full  text-slate-200 px-8 py-2 uppercase  tracking-wide md:text-[18px] hover:bg-slate-200 transition-colors duration-300 ease-in-out hover:text-slate-800 font-bold active:animate-ping"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
