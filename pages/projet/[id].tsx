/* eslint-disable @next/next/link-passhref */
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
  const { id } = router.query;

  const post = data[id]

  const slides = data[id].slide
  // console.log(post)
  useEffect(()=>{
    // aos animation
    AOS.init();
      
  }, [])
  return(
    <>
      <section className={styles.sectionprojet}>
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
          <div className={styles.mysiwpe}>
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {slides.map((image) => (
        <SwiperSlide key={image} className={styles.swiper}>
          <img className={styles.imgSlide} src={image} alt="screen du rendu" />
          
        </SwiperSlide>
      ))}
            </Swiper>
          </div>
          <div className={styles.voir}>
          <Link href={`${post.lien}`} target="_blank"><div>
                <h2>
                  Voir en Direct
                </h2>
              </div></Link>
              
          </div>
        </main>
      </section>
    </>
  )
}

export default Page;
