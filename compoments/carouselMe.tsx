import { useRef, useEffect, useState } from 'react';
import styles from '../styles/Scroll.module.css'
import React, { Component } from 'react'
import CequejeSaisFaire from './composantde';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function MyComponent() {
  useEffect(()=>{
    // aos animation
    AOS.init();
      
  }, [])
  return (
  <>
    <div className={styles.scrollee} id="scroll">

          <div className={styles.scrollee1} >
            <h1 data-aos="fade-up">Ce que </h1>
            <h1 data-aos="fade-up">Je sais</h1>
            <h1 data-aos="fade-up">faire !</h1>
          </div>

          <CequejeSaisFaire
            logoAbout=""
            titreAbout="Maquetage de site Web, Conception des Wireframes, des Logos et autres..."
            videoAbout="/design.mp4"
            imgAbout1="/design11.png"
            imgAbout2="/design11.png"
            imgAbout3="/design11.png"
          />
          
          {/* dev */}

          <CequejeSaisFaire
            logoAbout=""
            titreAbout="Maquetage de site Web, Conception des Wireframes, des Logos et autres..."
            videoAbout="/code.mp4"
            imgAbout1="/design11.png"
            imgAbout2="/design11.png"
            imgAbout3="/design11.png"
          />

    </div>

  </>
  );
}

export default MyComponent