import Image from "next/image";

export default function LandingSection() {
  return (
    <section className="mt-28 px-6 h-[82vh] bg-[url('/landing-bg.svg')] bg-no-repeat bg-origin-content bg-bottom">
      <header>
        <h1 className="font-bold text-3xl text-center">
          Frontend & Backend Web Developer
        </h1>
        <p className="text-center text-lg mt-6 tracking-wide">
          I code frontend and backend web applications, and I love what I do.
        </p>
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
