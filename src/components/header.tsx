"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button, KeyboardArrowRight } from "@/utils/SharedModule";
import HeaderNav from "./nav/headerNav";
import BlurryCursor from "./cursor";
import styles from "@/styles/Header.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const path = useRef<SVGPathElement | null>(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set([firstText.current, secondText.current], { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.01 * direction;
  };

  return (
    <main className={styles.main}>
      <HeaderNav />
      <div className="h-screen flex flex-col justify-center px-5 md:px-24">
        <p className="text-white text-xl font-bold">
          hello world
        </p>
        <h2 className="text-white text-base text-justify md:text-2xl max-w-4xl font-bold mb-36">
          Je m'appelle Pulsy BACKEKOLO, j'ai {new Date().getFullYear() - 2002} ans et je suis développeur full stack. Polyvalent, je m'intéresse également à l'IA (machine learning / deep learning) et je suis un grand fan de l'open source. Avec 3 ans d'expérience en développement, j'ai déjà réalisé plusieurs projets personnels et travaillé pour des entreprises. Je propose également des services en freelance et suis disponible pour des projets personnels ou d'entreprise. Retrouvez mes projets ci-dessous ou <a href="#contact" className="underline hover:text-blue-400 transition-colors">contactez-moi directement</a>.
        </h2>
      </div>

      {/* <img
        src="/images/background.jpg"
        style={{ width: "100%", height: "auto" }}
        alt="background"
      /> */}
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>web Developer - Full Stack Developer - web Developer - Full Stack Developer </p>
          {/* <p ref={secondText}>Full Stack Developer -</p> */}
        </div>
      </div>
    </main>
  );
}
