/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, useState } from 'react';
import styles from '../styles/Scroll.module.css'
import React, { Component } from 'react'
import AOS from 'aos';

function CequejeSaisFaire(props: any) {
  const [scroll, setScroll] = useState(0);

  useEffect(()=>{
    // aos animation
    AOS.init();
      
    // scroll return
    window.addEventListener('scroll', ()=>{
      const scrollY = window.scrollY / 200;

      let scrolltruc = scrollY / 2
      setScroll(scrollY)
    })
  }, [])

  // console.log(scroll)
  return (
  <>
    <div  className={styles.scrollee2}>
            <div className={styles.title}  data-aos="fade-up"
            data-aos-anchor-placement="top-center">
              <div >
                <img src={props.logoAbout} alt="" />
                <h2 style={{transform: `rotateY(${63-scroll}deg)`}}>
                  {props.titreAbout}
                </h2>
              </div>
              <div>
              <video style={{transform: `rotateY(${-18+scroll}deg)`}} muted autoPlay loop className={styles.video}>
                <source src={props.videoAbout} />
              </video>
              </div>

            </div>
          </div>
  </>
  );
}

export default CequejeSaisFaire