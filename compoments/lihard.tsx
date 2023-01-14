/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, useState } from 'react';
import styles from '../styles/Competence.module.css'
import React, { Component } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Lihard(props: any) {
const pourcent = props.pourcent
  
const Example = styled.div`
&::after {
  width: ${pourcent}%;

&::before {
  content: '${pourcent}%';
  left: ${pourcent}%;
}
`
useEffect(()=>{
  // aos animation
  AOS.init();
    
}, [])
  return (
  <>
    <li data-aos="zoom-in-up">
      <div className={styles.titrehard}>
        <img src={props.lien} alt="logo de mes competence" />
        <h3>{props.titre}</h3>
      </div>
      <Example className={styles.barre}>
      </Example>
    </li>
  </>
  );
}

export default Lihard