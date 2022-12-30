/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Header from '../compoments/header';
import ScrollHorizontal from '../compoments/carouselMe';
import MyComponent from '../compoments/carouselMe';

export default function Home() {
  const [scroll, setscroll] = useState(0);
  const [positionHori, setPositionHori] = useState("relative");

  useEffect(()=>{
    // aos animation
    AOS.init();

    // scroll
    window.addEventListener('scroll', ()=>{
      const scrollY = window.scrollY / 15;
      setscroll(scrollY)
    })
    
    console.log(scroll);

     // scroll horizontall
     const scrolle = document.querySelector('#scroll')
      
  }, [])
  // console.log(scroll)

  return (
   <>
  <div className={styles.scene}>
    <div className={styles.page}>
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
      <MyComponent />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatem eum praesentium et a. Soluta iure error autem. Labore minus ab quae distinctio laboriosam quaerat quisquam pariatur itaque voluptatem sapiente.
        Sint qui aliquam cupiditate dolor aliquid. Magnam, quidem dolorem atque odio ipsam rem at iste optio sint consequatur perspiciatis harum tempore dolor amet veniam, dolorum vel a facilis beatae enim.
        Repudiandae eius est voluptatem aut aliquam! Ipsa ab optio architecto est! Nihil vel id illo impedit deleniti nisi quis dolorum quaerat quod pariatur eveniet nobis voluptate, similique a voluptas harum.
        Officiis sunt ex praesentium et id nisi autem repudiandae numquam exercitationem vitae, voluptate eligendi! Odio, quisquam optio. Ducimus ipsa, excepturi at ullam velit nemo magni, voluptate facilis eligendi dolores repellat.
        Temporibus aperiam eaque asperiores, laborum doloremque voluptates animi necessitatibus harum non nulla! Sequi consectetur nihil soluta inventore asperiores cum tempora temporibus quaerat mollitia, quod quidem deleniti in explicabo voluptates incidunt.
      </div>
    </div>           
  </div>       
   </>
  );
}


