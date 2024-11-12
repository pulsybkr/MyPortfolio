'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from './anim';
import Body from './bodyNav';
// import "../../styles/perso.css"

const links = [
  {
    title: "Accueil",
    href: "#accueil",
    src: "home.png"
  },
  {
    title: "Projet",
    href: "#projet",
    src: "shop.png"
  },
  {
    title: "Technos",
    href: "#services",
    src: "lookbook.png"
  },
  {
    title: "Contact",
    href: "#contact",
    src: "contact.png"
  }
]

export default function Nav() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className="nav">
      <div className="wrapper">
        <div className="container">
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
        </div>
      </div>
    </motion.div>
  )
}