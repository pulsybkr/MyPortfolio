/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, useState } from 'react';
import styles from '../styles/Competence.module.css'
import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Link from 'next/link';
import { useRouter } from 'next/router';

function Contact() {

  const router = useRouter()
  useEffect(()=>{
    // aos animation
    AOS.init();
      
  }, [])
  return (
  <>
  <div id='contact' className={styles.contact}>

      <div  className={styles.scrollee1} >
        <h1 data-aos="fade-up" >Contact </h1>
      </div>

      <section className={styles.bloc}>
        <div data-aos="fade-right" className={styles.blocleft}>
          <h1>
            Pour me contacter
          </h1>
        </div>
        <div className={styles.blocright}>
            <div onClick={() => router.push('tel:+33669168471')} data-aos="fade-left" className={styles.contenaire}>
              <img src="/logo/telephoner.png" alt="logo de telephone" />
              <div>
                <h3>Telephone</h3>
                <p>+33 6 69 16 84 71</p>
              </div>
            </div>
            <div onClick={() => router.push('mailto:pulsycaleb@gmail.com')} data-aos="fade-left" className={styles.contenaire}>
            <img src="/logo/enveloppe.png" alt="logo d'envelopper pour mail" />

              <div>
                <h3>E-mail</h3>
                <p>pulsycaleb@gmail.com</p>
              </div>
            </div>
            <div onClick={() => router.push('https://www.linkedin.com/in/pulsybkr/')} data-aos="fade-left" className={styles.contenaire}>
            <img src="/logo/linkedin.png" alt="logo de linkedin" />

              <div>
                <h3>Linkedin</h3>
                <p>Pulsy Caleb BACKEKOLO</p>
              </div>
            </div>
            <div onClick={() => router.push('https://github.com/pulsybkr')} data-aos="fade-left" className={styles.contenaire}>
            <img src="/logo/github.png" alt="logo de gihub" />

              <div>
                <h3>GitHub</h3>
                <p>@pulsybkr</p>
              </div>
            </div>
            
        </div>
      </section>

      <div data-aos="fade-up" className={styles.cv}>
            <div>
              <Link href="/cv.pdf" download="Cv de Pulsy BACKEKOLO" target="_blank"><img src="/logo/cv.png" alt="" /></Link>
              <h2>Telecharger mon CV</h2>
            </div>
      </div>
  </div>

  </>
  );
}

export default Contact