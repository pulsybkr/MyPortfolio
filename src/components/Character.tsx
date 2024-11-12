import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef, ReactNode } from 'react';
// import '../styles/perso.css';

interface ParagraphProps {
  paragraph: string;
}

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

interface CharProps {
  children: string;
  progress: any;
  range: [number, number];
}

export default function Paragraph({ paragraph }: ParagraphProps) {

  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.7", "start 0.25"]
  })

  const words = paragraph.split(" ")
  return (
    <p 
      ref={container}         
      className="paragraph text-2xl md:text-4xl text-justify px-2 md:px-16 font-bold leading-tight"
    >
    {
      words.map( (word: string, i: number) => {
        const start = i / words.length
        const end = start + (1 / words.length)
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
      })
    }
    </p>
  )
}

const Word = ({ children, progress, range }: WordProps) => {
  const amount = range[1] - range[0]
  const step = amount / children.length
  return (
    <span className="word">
      {
        children.split("").map((char: string, i: number) => {
          const start = range[0] + (i * step);
          const end = range[0] + ((i + 1) * step)
          return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
        })
      }
    </span>
  )
}

const Char = ({ children, progress, range }: CharProps) => {
  const opacity = useTransform(progress, range, [0,1])
  return (
    <span>
      <span className="shadow">{children}</span>
      <motion.span style={{opacity: opacity}}>{children}</motion.span>
    </span>
  )
}