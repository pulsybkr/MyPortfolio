import { useRef, useEffect, useState } from 'react';
import styles from '../styles/Scroll.module.css'
import React, { Component } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

function MyComponent() {
  
  return (
  <>
    <div className={styles.scrollee} id="scroll">

     <HorizontalScroll>
          <div  className={styles.scrollee1} >
            <h1>Ce que </h1>
            <h1>Je sais</h1>
            <h1>faire !</h1>
          </div>

          <div  className={styles.scrollee2}>
            <div className={styles.title}>
              <div>
                <img src="" alt="" />
                <h2>
                  Maquetage de site Web, Conception des Wireframes, des Logos et autres...
                </h2>
              </div>
              <video muted autoPlay loop className={styles.video}>
                <source src="/design.mp4" />
              </video>

            </div>
            <div className={styles.image}>
              <img src="/design11.png" alt="" />
              <img src="/design22.jpg" alt="" />
              <img src="/design33.jpg" alt="" />

            </div>
          </div>
          <div  className={styles.scrollee3}>
            <h1>Hello World 3</h1>
          </div>
      </HorizontalScroll>
    </div>

  </>
  );
}

export default MyComponent