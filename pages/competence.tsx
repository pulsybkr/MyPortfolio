/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, useState } from 'react';
import styles from '../styles/Competence.module.css'
import React, { Component } from 'react'
import styled from 'styled-components'
import Lihard from '../compoments/lihard';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Mycompetence() {
  const [visibleSection, setVisibleSection] = useState('section1')

  const [selectedButton, setSelectedButton] = useState("button1")
  useEffect(()=>{
    setSelectedButton("button1")
    // aos animation
    AOS.init();
      
  }, [])
  return (
  <>
    <div className={styles.competence}>

      <div  className={styles.scrollee1} >
        <h1 data-aos="fade-up" >Mes competences </h1>
      </div>

      <div className={styles.competencetitle}>
        <button style={{ backgroundColor: selectedButton === 'button1' ? '#34393E' : 'black'}} onClick={() => {
          setSelectedButton('button1');
          setVisibleSection('section1');
        }}>Hard Skills</button>

        <button style={{ backgroundColor: selectedButton === 'button2' ? '#34393E' : 'black'}} onClick={() => {
          setSelectedButton('button2');
          setVisibleSection('section2');
        }}>Soft Skills</button>
    </div>

    <section className={styles.skills}>
      {visibleSection === 'section1' && 
      <div  className={styles.hardskills}>
        <section>
            <ul>
              <Lihard
              pourcent="85"
              lien="/logo/html.png"
              titre="HTML" 
              />
              <Lihard
              pourcent="80"
              lien="/logo/css.png"
              titre="css" 
              />
              <Lihard
              pourcent="65"
              lien="/logo/js.png"
              titre="JAVASCRIPT" 
              />
              <Lihard
              pourcent="65"
              lien="/logo/git.png"
              titre="GIT" 
              />
              <Lihard
              pourcent="55"
              lien="/logo/typescript.png"
              titre="TYPESCRIPT" 
              />
              <Lihard
              pourcent="50"
              lien="/logo/nextjs.png"
              titre="NEXT JS" 
              />
              <Lihard
              pourcent="40"
              lien="/logo/expressjs.png"
              titre="EXPRESS JS"  
              />
              <Lihard
              pourcent="50"
              lien="/logo/wordpress.png"
              titre="WORDPRESS" 
              />
              <Lihard
              pourcent="65"
              lien="/logo/figma.png"
              titre="FIGMA" 
              />
              <Lihard
              pourcent="70"
              lien="/logo/ps.png"
              titre="PHOTOSHOP" 
              />
            </ul>
        </section>
      </div>}

      {visibleSection === 'section2' && 
      <div  className={styles.softskills}>
        <section>
            <ul>
              <li data-aos="zoom-in-up">
              Travail en équipe
              </li>
              <li data-aos="zoom-in-up">
              Communication 
              </li>
              <li data-aos="zoom-in-up">
              Résolution de problèmes
              </li>
              <li data-aos="zoom-in-up">
              Flexibilité 
              </li>
              <li data-aos="zoom-in-up">
              Aptitude à l'apprentissage
              </li>
              <li data-aos="zoom-in-up">
              Créativité 
              </li>
              <li data-aos="zoom-in-up">
              Sens de l'initiative 
              </li>
              <li data-aos="zoom-in-up">
              Autonomie 
              </li>
            </ul>
        </section>
      </div>}
                 
    </section>
  </div>

  </>
  );
}

export default Mycompetence