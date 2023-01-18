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
          <h2 style={{transform: `rotateY(${58+scroll}deg)`}}>Developpeur Web</h2>
          <h2 style={{transform: `rotateY(${48+scroll}deg)`}}>Front - End</h2>
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
              Hello World ! je m'appelle Pulsy Backekolo, j'ai 20 ans. Je suis passionné par les nouvelles technologies et ça fait déjà deux ans que je code des sites web. Actuellement, je suis en train d'étudier l'informatique et le développement web de manière plus approfondie, en mettant l'accent sur le développement web front-end.
            </h2>
            <h3 data-aos="fade-up"
              data-aos-duration="3000">
              En tant que développeur web passionné et créatif, j'aime travailler sur des projets qui me permettent de mettre à profit mes compétences en matière de design et de création de sites web attrayants et fonctionnels.De plus je suis également à la recherche d'une alternance de 9 mois à partir de mars 2023 afin d'apprendre et de développer mes compétences dans un environnement professionnel.
            </h3>
            <h3 data-aos="fade-up"
              data-aos-duration="3000">
              Si vous êtes à la recherche d'un développeur web motivé et souhaitant apprendre et progresser, n'hésitez pas à me contacter. Je suis impatient de travailler avec vous et de mettre mes compétences au service de vos projets.
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


