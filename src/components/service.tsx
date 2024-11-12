"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Picture1 from "../../public/images/web_1.jpg";
import Picture2 from "../../public/images/web_2.jpg";
import Picture3 from "../../public/images/snap_1.jpg";
import Lenis from "lenis";

const data = [
  {
    title: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
  },
  {
    title: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
  },
  {
    title: "JS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
  },
  {
    title: "ANGULAR",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg"
  },
  {
    title: "REACT",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
  },
  {
    title: "NEXT JS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
  },
  {
    title: "REACT NATIVE",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg"
  },
  {
    title: "WORDPRESS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg"
  },
  {
    title: "TAILWIND CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  },
  {
    title: "NODE JS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
  },
  {
    title: "EXPRESS JS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
  },
  {
    title: "PHP",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
  },
  {
    title: "FIREBASE",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg"
  },
  {
    title: "SUPABASE",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
  },
  {
    title: "MYSQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
  },
  {
    title: "POSTGRESQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
  },
  {
    title: "C",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
  },
  {
    title: "PYTHON",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
  },
  {
    title: "TYPESCRIPT",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
  },
  {
    title: "GIT",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
  },
  {
    title: "FIGMA",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
  },
  {
    title: "PHOTOSHOP",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-line.svg"
  },
];

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Service3d() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const chunkedData = [];
  for (let i = 0; i < data.length; i += 3) {
    chunkedData.push(data.slice(i, i + 3));
  }

  return (
    <main id="services" className="overflow-hidden">
      <h1 className="text-2xl text-center bg-white text-black font-bold py-10 z-10">Mes Technos</h1>
      <div className="h-auto md:min-h-[100vh] bg-white z-50 relative">
        <div ref={container}>
          {chunkedData.map((chunk, index) => (
            <Slide
              key={index}
              src1={chunk[0].src}
              src2={chunk[1]?.src}
              src3={chunk[2]?.src}
              direction={index % 2 === 0 ? "left" : "right"}
              left={index % 2 === 0 ? "-40%" : "-25%"}
              progress={scrollYProgress}
              title1={chunk[0].title}
              title2={chunk[1]?.title}
              title3={chunk[2]?.title}
            />
          ))}
        </div>
      </div>
      <div />
    </main>
  );
}

const Slide = (props: {
  direction: string;
  left: string;
  progress: any;
  src1: any;
  src2: any;
  src3: any;
  title1: string;
  title2: string;
  title3: string;
}) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={props.src1} title={props.title1} />
      <Phrase src={props.src2} title={props.title2} />
      <Phrase src={props.src3} title={props.title3} />
    </motion.div>
  );
};

const Phrase = ({ src, title }: { src: any; title: string }) => {
  return (
    <>
      {src && (
        <div className={"px-5 flex gap-5 items-center"}>
          <p className="text-[5.5vw] text-black">{title}</p>
          <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
            <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
          </span>
        </div>
      )}
    </>
  );
};
