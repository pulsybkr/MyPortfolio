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
              Hello World ! je m'appelle Pulsy Backekolo, j'ai 20 ans. Je suis passionné par les nouvelles technologies. Depuis environ quatre ans j'ai commencé à Designer des logos, des illustrations, des affiches... avec les outils de design Photoshop et Illustrator. et il y'a environ deux ans j'ai commencé à coder des sites web.<br/> Actuellement, je suis en année préparatoire chargée de projet informatique à l'<a href="https://etna.io/" target="_blank" rel="noopener noreferrer">ETNA</a>, je prépare un diplome de niveau BAC +2, j'apprend à la fois Developpement Web, le Web design, les bases du developpement mobile... <br/> Ayant deja fais une premiere année de bachelor en Developpement Web j'ai acquis des bonnes bases à la fois en developpement web et design UI/UX.
            </h2>
            <h3 data-aos="fade-up"
              data-aos-duration="3000">
              En tant que développeur et designer web passionné et créatif, j'aime travailler sur des projets qui me permettent de mettre à profit mes compétences en matière de design et de création de sites web attrayants et fonctionnels. <br/> De plus je suis également à la recherche d'une alternance de 9 mois à partir de mars 2023 afin d'apprendre et de développer mes compétences dans un environnement professionnel.
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


