import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { opacity } from "./anim";
// import "../../styles/perso.css";
import Nav from "./nav";
import GradientCursor from "../cursor";

export default function HeaderNav() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="header py-5 px-5 md:px-24 bg-[var(--background)]">
      <GradientCursor isActive={isActive} />
      <div className="bar flex justify-between items-center">
        <Link href="/">
          <p className="text-white text-xl lowercase font-bold">pulsy.</p>
        </Link>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="el"
        >
          <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
          <div className="label">
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Fermer
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={opacity}
          animate={!isActive ? "open" : "closed"}
          className="hidden md:block"
        >
          <div className="relative group" onClick={() => {
            const targetElement = document.getElementById('contact');
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            <button className="text-white relative z-20 font-bold transition-all duration-300 ease-in-out group-hover:text-neutral-700">Parlons</button>
            <div className="absolute bottom-[-5px] z-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:h-[130%]"></div>
          </div>
        </motion.div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
