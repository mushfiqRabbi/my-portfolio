import Image from "next/image";
import Heading from "./Heading";
import BodyText from "./BodyText";

export default function LandingSection() {
  return (
    <section
      className="pt-28 lg:pt-24 md:pt-40 lg:container mx-auto px-6"
      id="home"
    >
      <header>
        <Heading
          value={1}
          className="md:text-[40px] lg:text-5xl text-slate-700"
        >
          Frontend & Backend <pre className="md:hidden"></pre> Web Developer
        </Heading>
        <BodyText value={1} className="md:text-2xl text-slate-600 mt-6">
          I bring ideas to life with full-stack development expertise.
        </BodyText>
      </header>
      <figure>
        <Image
          src="/avatar-male.svg"
          width={180}
          height={180}
          className="mx-auto my-20 md:w-[210px] lg:my-14"
          alt="Male avatar illustration"
        />
      </figure>
      <figure>
        <Image
          priority
          src="/landing.svg"
          height={512}
          width={512}
          alt="web developer illustration"
          className="w-auto h-auto mx-auto max-w-3xl"
        />
      </figure>
    </section>
  );
}
