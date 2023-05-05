import Image from "next/image";
import Heading from "./Heading";
import BodyText from "./BodyText";

export default function LandingSection() {
  return (
    <section
      className="pt-32 lg:pt-24 md:pt-40 px-6 lg:container mx-auto"
      id="home"
    >
      <header>
        <Heading value={1} className="md:text-[40px] lg:text-5xl">
          Frontend & Backend Web Developer
        </Heading>
        <BodyText value={1} className="md:text-2xl">
          I code frontend and backend web applications, and I love what I do.
        </BodyText>
      </header>
      <figure>
        <Image
          src="/avatar-male.svg"
          width={180}
          height={180}
          className="mx-auto my-20 md:w-1/3 lg:max-w-[210px] lg:my-14"
          alt="Male avatar illustration"
        />
      </figure>
      <figure>
        <Image
          src="/landing.svg"
          height={512}
          width={512}
          alt="web developer illustration"
          className="mx-auto md:w-4/5 lg:max-w-3xl"
        />
      </figure>
    </section>
  );
}
