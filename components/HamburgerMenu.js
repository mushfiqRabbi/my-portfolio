import Link from "next/link";
import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu() {
  return (
    <>
      <label
        className={`lg:hidden h-12 w-12 bg-[#407BFF] inline-block py-[14px] px-3 fixed top-10 right-10 rounded-full z-50 md:h-20 md:w-20 md:py-[22px] md:px-4`}
      >
        <input type="checkbox" className={`hidden ${styles.checkbox}`} />
        <div className={`h-full w-full relative ${styles.div_container}`}>
          <div
            className={`h-[3px] bg-white absolute w-full top-0 rounded-full ${styles.div_one} `}
          ></div>
          <div
            className={`h-[3px] bg-white absolute w-full top-1/2 -translate-y-1/2 rounded-full ${styles.div_two}`}
          ></div>
          <div
            className={`h-[3px] bg-white absolute w-full bottom-0 rounded-full ${styles.div_three}`}
          ></div>
        </div>
      </label>
      <div
        className={`lg:mx-auto  lg:mt-10 lg:bg-white lg:sticky lg:h-auto lg:border-none lg:w-full fixed h-0 w-0 bg-[#407BFF] right-0 top-0 z-40 border-l border-b overflow-hidden ${styles.menu_container}`}
      >
        <nav className="lg:static lg:-translate-x-0 absolute top-14 md:top-28 left-1/2 -translate-x-1/4 lg:max-w-4xl xl:max-w-6xl mx-auto">
          <ul
            className={`flex flex-col lg:flex-row gap-1 md:gap-2 xl:pl-20 lg:pb-4 lg:gap-5 ${styles.nav_list}`}
          >
            <li className="lg:mr-auto lg:border-b-2 lg:border-b-transparent lg:hover:border-b-slate-500 group">
              <Link
                href="#home"
                className="lg:text-black lg:text-lg lg:font-semibold text-white text-xl md:text-2xl md:font-base text-center block uppercase font-light tracking-wide lg:px-1 lg:py-2 lg:relative lg:top-4 lg:group-hover:top-2 lg:transition-[top] duration-500"
              >
                Home
              </Link>
            </li>
            <li className=" lg:border-b-2 lg:border-b-transparent lg:hover:border-b-slate-500 group">
              <Link
                href="#skills"
                className="lg:text-black lg:text-lg lg:font-semibold text-white text-xl md:text-2xl md:font-base text-center block uppercase font-light tracking-wide lg:px-1 lg:py-2 lg:relative lg:top-4 lg:group-hover:top-2 lg:transition-[top] duration-500"
              >
                Skills
              </Link>
            </li>
            <li className=" lg:border-b-2 lg:border-b-transparent lg:hover:border-b-slate-500 group">
              <Link
                href="#works"
                className="lg:text-black lg:text-lg lg:font-semibold text-white text-xl md:text-2xl md:font-base text-center block uppercase font-light tracking-wide lg:px-1 lg:py-2 lg:relative lg:top-4 lg:group-hover:top-2 lg:transition-[top] duration-500"
              >
                Works
              </Link>
            </li>
            <li className=" lg:border-b-2 lg:border-b-transparent lg:hover:border-b-slate-500 group">
              <Link
                href="#contact"
                className="lg:text-black lg:text-lg lg:font-semibold text-white text-xl md:text-2xl md:font-base text-center block uppercase font-light tracking-wide lg:px-1 lg:py-2 lg:relative lg:top-4 lg:group-hover:top-2 lg:transition-[top] duration-500"
              >
                Contact
              </Link>
            </li>
            <li className=" lg:border-b-2 lg:border-b-transparent lg:hover:border-b-slate-500 group">
              <Link
                href="#footer"
                className="lg:text-black lg:text-lg lg:font-semibold text-white text-xl md:text-2xl md:font-base text-center block uppercase font-light tracking-wide lg:px-1 lg:py-2 lg:relative lg:top-4 lg:group-hover:top-2 lg:transition-[top] duration-500"
              >
                Footer
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
