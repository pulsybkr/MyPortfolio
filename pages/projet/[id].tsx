/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import data from '../../fichier.json'
import { useRef, useEffect, useState } from 'react';
import styles from '../../styles/Project.module.css'
import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useRouter } from 'next/router'
import Header from '../../compoments/header';
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Virtual } from "swiper";
import Link from 'next/link';
import Souris from '../../compoments/sourisperso';

function Page() {
  const router = useRouter();
  const id = String(router.query.id)

  const nombr = Number(id)
  const post = data[nombr]

  // const slides = post.slide
  console.log(typeof id)
  useEffect(()=>{
    // aos animation
    AOS.init();
      
  }, [])
  return(
    <>
      {/* <section className={styles.sectionprojet}>
        <Header/>
      <Souris/>

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
          
          <div className={styles.voir}>
          <Link href={`${post.lien}`} target="_blank"><div>
                <h2>
                  Voir en Direct
                </h2>
              </div></Link>
              
          </div>
        </main>
      </section> */}
    </>
  )
}

export default Page;
