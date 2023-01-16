/* eslint-disable @next/next/no-img-element */
import data from '../../fichier.json'
import { useRef, useEffect, useState } from 'react';
import styles from '../../styles/Project.module.css'
import React, { Component } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useRouter } from 'next/router'
import Header from '../../compoments/header';

function Page() {
  const router = useRouter();
  const { id } = router.query;

  const post = data[id]
  useEffect(()=>{
    // aos animation
    AOS.init();
      
  }, [])
  return(
    <>
      <section className={styles.sectionprojet}>
        <Header/>
        <main>
          <div className={styles.titre}>
              <h1>{post.name}</h1>
          </div>
          <div className={styles.bkg}>
            <img src={post.image} alt="image de presentation" />
          </div>
          <div className={styles.description}>
            <div className={styles.techno}>
              <h2>Résumé</h2>
              <p>{post.description}</p>
            </div>
            <div className={styles.techno}>
              <h2>Techno</h2>
              <p>{post.techno}</p>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Page;
