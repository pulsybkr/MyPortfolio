/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Header from '../compoments/header';
import MyComponent from '../compoments/carouselMe';
import Mycompetence from './competence';
import Myproject from './project';
import Contact from './contact';
import Souris from '../compoments/sourisperso';
import PiwikPro from '@piwikpro/react-piwik-pro';

export default function Home() {
  const [scroll, setscroll] = useState(0);

  useEffect(()=>{
    // aos animation
    AOS.init();

    PiwikPro.initialize('b2da65e5-4cfd-47f6-ac5c-934e1bc8551e', 'https://pulsybkr.containers.piwik.pro');

    document.getElementById('root')
    // PiwikPro.trackPageView();
    // scroll
    window.addEventListener('scroll', ()=>{
      const scrollY = window.scrollY / 15;
      setscroll(scrollY)
    })

    
  }, [])
  // console.log(scroll)

  return (
   <>
  <div id='root' className={styles.scene}>
    <div className={styles.page}>
      <Souris/>
      <Header />
      <section className={styles.title}>
        <div className='text'>
          <h2 style={{transform: `rotateY(${63+scroll}deg)`}}>Pulsy BACKEKOLO</h2>
          <h2 style={{transform: `rotateY(${58+scroll}deg)`}}>Designer </h2>
          <h2 style={{transform: `rotateY(${48+scroll}deg)`}}>Developpeur </h2>
          <h2 style={{transform: `rotateY(${58+scroll}deg)`}}>Web </h2>
{/*  */}
        </div>
      </section>    
      <section id='aboutme' className={styles.aboutme}>
          <div data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <img style={{transform: `rotateY(${-48+scroll}deg)`}} src="/photo1.jpg" alt="" />
          </div>
          <div>
            <h2 data-aos="fade-up"
              data-aos-anchor-placement="top-center">
              Salut toi, <br />
              Je suis Pulsy BACKEKOLO, un développeur et designer web en herbe, toujours à la recherche de nouvelles opportunités pour apprendre et m'améliorer. Je suis actuellement en deuxieme année d'étude en développement web, et j'ai une expérience de plus de trois ans dans les technologies HTML, CSS et JS. Depuis l'année dernière, j'ai également travaillé sur des technologies plus avancées telles que React, Next, Node, Express, React Native et Python.
            </h2>
            <h3 data-aos="fade-up"
              data-aos-duration="3000">
              Je suis une personne créative, motivée et qui apprend vite. J'ai une passion pour les nouvelles technologies et je suis toujours à la recherche de nouvelles compétences à acquérir. Mon objectif est de créer des expériences utilisateur exceptionnelles qui permettent aux utilisateurs de naviguer sur le web en toute simplicité et efficacité.

            </h3>
            <h3 data-aos="fade-up"
              data-aos-duration="3000">
              Actuellement à la recherche d'un stage de six mois ou d'une alternance d'un an, je suis prêt à mettre mes compétences à votre disposition. Si vous cherchez un développeur et designer web motivé et passionné, n'hésitez pas à me contacter ! <br />


              Merci d'avoir pris le temps de lire ma présentation. N'hésitez pas à parcourir mon portfolio pour en savoir plus sur mes projets et compétences. À bientôt !
            </h3>
          </div>
      </section> 
      <MyComponent 
      />

      < Mycompetence/>
      
      <Myproject/>

      <Contact/>
    </div>           
  </div>       
   </>
  );
}


