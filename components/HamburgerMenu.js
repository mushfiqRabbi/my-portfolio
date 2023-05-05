import Link from "next/link";
import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu() {
  return (
    <>
      <label
        className={`h-12 w-12 bg-[#407BFF] inline-block py-[14px] px-3 fixed top-10 right-10 rounded-full z-20 md:h-20 md:w-20 md:py-[22px] md:px-4`}
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
        className={`fixed h-0 w-0 bg-[#407BFF] right-0 top-0 z-10 border-l border-b overflow-hidden ${styles.menu_container}`}
      >
        <nav className="absolute top-14 md:top-28 left-1/2 -translate-x-1/4">
          <ul className={`flex flex-col gap-1 md:gap-2 ${styles.nav_list}`}>
            <li>
              <Link
                href="#home"
                className="text-white text-xl md:text-2xl md:font-base text-center block uppercase font-light tracking-wide"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="text-white text-xl md:text-2xl md:font-base text-center block uppercase font-light tracking-wide"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#works"
                className="text-white text-xl md:text-2xl md:font-base text-center block uppercase font-light tracking-wide"
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-white text-xl md:text-2xl md:font-base text-center block uppercase font-light tracking-wide"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#footer"
                className="text-white text-xl md:text-2xl md:font-base text-center block uppercase font-light tracking-wide"
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
