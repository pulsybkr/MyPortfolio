/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, useState } from 'react';
import styles from '../styles/Scroll.module.css'
import React, { Component } from 'react'
import AOS from 'aos';

function CequejeSaisFaire(props: any) {
  useEffect(()=>{
    // aos animation
    AOS.init();
      
  }, [])
  return (
  <>
    <div  className={styles.scrollee2}>
            <div className={styles.title}  data-aos="fade-up"
            data-aos-anchor-placement="top-center">
              <div >
                <img src={props.logoAbout} alt="" />
                <h2>
                  {props.titreAbout}
                </h2>
              </div>
              <video muted autoPlay loop className={styles.video}>
                <source src={props.videoAbout} />
              </video>

            </div>
            <div className={styles.image}  data-aos="fade-up"
            data-aos-anchor-placement="top-center">
              <img src={props.imgAbout1} alt="image de presentation de ce que je sais faire" />
              <img src={props.imgAbout2} alt="image de presentation de ce que je sais faire" />
              <img src={props.imgAbout3} alt="image de presentation de ce que je sais faire" />
            </div>
          </div>
  </>
  );
}

export default CequejeSaisFaire