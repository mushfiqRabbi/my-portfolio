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
            className={`h-[3px] bg-slate-100 absolute w-full top-0 rounded-full ${styles.div_one} `}
          ></div>
          <div
            className={`h-[3px] bg-slate-100  absolute w-full top-1/2 -translate-y-1/2 rounded-full ${styles.div_two}`}
          ></div>
          <div
            className={`h-[3px] bg-slate-100  absolute w-full bottom-0 rounded-full ${styles.div_three}`}
          ></div>
        </div>
      </label>
      <div
        className={`lg:mx-auto  lg:mt-14 lg:bg-white lg:sticky lg:h-auto lg:border-none lg:w-full fixed h-0 w-0 bg-[#407BFF] right-0 top-0 z-40 border-l overflow-hidden  ${styles.menu_container}`}
      >
        <nav className="lg:static lg:-translate-x-0 absolute top-20 md:top-28 left-1/2 -translate-x-1/3 lg:max-w-4xl xl:max-w-6xl mx-auto">
          <ul
            className={`flex flex-col lg:flex-row gap-1 md:gap-2 xl:pl-20 lg:pb-6 lg:gap-5 ${styles.nav_list}`}
          >
            <li className="lg:ml-auto lg:border-b-2 lg:border-b-transparent lg:hover:border-b-slate-900 group">
              <Link
                href="#skills"
                className="lg:text-slate-500 lg:group-hover:text-slate-900 lg:text-lg lg:font-semibold text-slate-200 group-hover:text-slate-50 text-xl md:text-2xl md:font-base text-right block uppercase font-light tracking-wide lg:px-1 lg:py-2 lg:relative lg:top-4 lg:group-hover:top-2 lg:group-hover:-translate-x-0 lg:transition-[top] lg:ease-in-out group-hover:-translate-x-4 duration-300 ease-in-out"
              >
                Skills
              </Link>
            </li>
            <li className=" lg:border-b-2 lg:border-b-transparent lg:hover:border-b-slate-900 group">
              <Link
                href="#works"
                className="lg:text-slate-500 lg:group-hover:text-slate-900 lg:text-lg lg:font-semibold text-slate-200 group-hover:text-slate-50 text-xl md:text-2xl md:font-base text-right block uppercase font-light tracking-wide lg:px-1 lg:py-2 lg:relative lg:top-4 lg:group-hover:top-2 lg:group-hover:-translate-x-0 lg:transition-[top] lg:ease-in-out group-hover:-translate-x-4 duration-300 ease-in-out "
              >
                Works
              </Link>
            </li>
            <li className=" lg:border-b-2 lg:border-b-transparent lg:hover:border-b-slate-900 group">
              <Link
                href="#contact"
                className="lg:text-slate-500 lg:group-hover:text-slate-900 lg:text-lg lg:font-semibold text-slate-200 group-hover:text-slate-50 text-xl md:text-2xl md:font-base text-right block uppercase font-light tracking-wide lg:px-1 lg:py-2 lg:relative lg:top-4 lg:group-hover:top-2 lg:group-hover:-translate-x-0 lg:transition-[top] lg:ease-in-out group-hover:-translate-x-4 duration-300 ease-in-out "
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
