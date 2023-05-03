import Image from "next/image";
import Heading from "./Heading";
import BodyText from "./BodyText";

export default function LandingSection() {
  return (
    <section className="mt-28 px-6 h-[82vh] bg-[url('/landing-bg.svg')] bg-no-repeat bg-origin-content bg-bottom">
      <header>
        <Heading value={1}>Frontend & Backend Web Developer</Heading>
        <BodyText value={1} className="mt-6">
          I code frontend and backend web applications, and I love what I do.
        </BodyText>
      </header>
      <figure>
        <Image
          src="/avatar-male-man-svgrepo-com.svg"
          width={180}
          height={180}
          className="mx-auto mt-20"
          alt="Male avatar illustration"
        />
      </figure>
    </section>
  );
}
