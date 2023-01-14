/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, useState } from 'react';
import styles from '../styles/Competence.module.css'
import React, { Component } from 'react'
import styled from 'styled-components'
import Lihard from '../compoments/lihard';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Mycompetence() {
  useEffect(()=>{
    // aos animation
    AOS.init();
      
  }, [])
  const [visibleSection, setVisibleSection] = useState('section1')
  return (
  <>
    <div className={styles.competence}>

      <div  className={styles.scrollee1} >
        <h1 data-aos="fade-up" >Mes competences </h1>
      </div>

      <div className={styles.competencetitle}>
        <button onClick={() => setVisibleSection('section1')}>Hard Skills</button>

        <button onClick={() => setVisibleSection('section2')}>Soft Skills</button>
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
        Contenu de la section 2
      </div>}
                 
    </section>
  </div>

  </>
  );
}

export default Mycompetence