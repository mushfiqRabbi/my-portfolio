import WorkCard from "./WorkCard";

const workData = [
  {
    shortDescription:
      "Aamar Pharma, an online pharmacy, leverages Next.js, MongoDB, and Firebase for a smooth user experience. Secure transactions are facilitated through the Aamar Pay payment gateway, ensuring convenience and reliability.",
    link: "https://aamar-pharma.vercel.app/",
    linkType: "deployment",
    imagePath: "/aamar-pharma.png",
  },
  {
    shortDescription:
      "Owlet, tailored for the Bangladesh market, is a Next.js-powered online clothing brand. It offers a seamless shopping experience, delivering trendy and quality fashion to customers nationwide.",
    link: "https://owlet-eight.vercel.app/",
    linkType: "deployment",
    imagePath: "/owlet.png",
  },
  {
    shortDescription:
      "eMart: Robust ecommerce website with sign-in, search, filtering, cart, checkout, and secure payment gateway.",
    link: "https://mshop-seven.vercel.app/",
    linkType: "deployment",
    imagePath: "/emart.png",
  },
  {
    shortDescription:
      "ubChats: Real-time chat app with audio and video calling, built using React, MongoDB, Socket.io, and WebRTC.",
    link: "https://ub-chats.onrender.com/",
    linkType: "deployment",
    imagePath: "/ubchats.jpg",
  },
  {
    shortDescription:
      "A portfolio project created with Next.js and Tailwind CSS, combining the power of a React framework and a utility-first CSS framework to build a modern and responsive portfolio website.",
    link: "https://portfolio-mushfiq.vercel.app/",
    linkType: "deployment",
    imagePath: "/portfolio.png",
  },
  // {
  //   shortDescription:
  //     "A project utilizing Express.js and Passport.js to implement session-based authentication for secure user login and session management.",
  //   link: "https://github.com/mushfiqRabbi/simple-session-based-authentication",
  //   imagePath: "/lock_two.jpg",
  // },
  {
    shortDescription:
      "An authentication project using Express.js and JSON Web Tokens (JWT) for secure user authentication and authorization, enabling token-based authentication for protected routes.",
    link: "https://github.com/mushfiqRabbi/simple-authentication-using-JWT",
    linkType: "repository",
    imagePath: "/lock_one.jpg",
  },
];

export default function WorkCards() {
  return (
    <div className="grid gap-7 place-items-center px-2 mx-auto mt-14 max-w-lg md:grid-cols-2 md:max-w-4xl lg:grid-cols-3 lg:mt-20 lg:max-w-6xl 2xl:max-w-[86rem]">
      <WorkCard workData={workData[0]} />
      <WorkCard workData={workData[1]} />
      <WorkCard workData={workData[2]} />
      <WorkCard workData={workData[3]} />
      <WorkCard workData={workData[4]} />
      <WorkCard workData={workData[5]} />
    </div>
  );
}
