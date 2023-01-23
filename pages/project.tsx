/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, useState } from 'react';
import styles from '../styles/Project.module.css'
import React, { Component } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import datas from '../fichier.json'
import { useRouter } from 'next/router'

function Myproject() {
const router = useRouter()

  useEffect(()=>{
    // aos animation
    AOS.init();
      
  }, [])

  return (
  <>
    <div id='projet' className={styles.project}>
    <div  className={styles.scrollee1} >
        <h1 data-aos="fade-up" >Mes Projects </h1>
      </div>
    </div>
    <section className={styles.blocprojet}>
    <ul>
    {datas.map((data) => (
      <li data-aos="zoom-in" data-aos-duration="3000" key={data.id} style={{transform: `rotateY(${18}deg)`}} 
      
      onClick={() => router.push(`/projet/${data.id}`)}>
      <div className={styles.contenair}>
        <img src={data.logo} alt="image de presentation du project" />
        <div className={styles.info}>
          <h2>{data.name}</h2>
          <p>{data.techno}</p>
        </div>
      </div>
    </li>
        ))}
      </ul>      
    </section>
  </>
  );
}

export default Myproject