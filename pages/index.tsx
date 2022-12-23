import styles from '../styles/Home.module.css'
import { Canvas } from "@react-three/fiber";
import LightBulb from '../compoments/LightBulb';
import Box from '../compoments/Box';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


export default function Home() {
  AOS.init();
  const [hoverMenu, setHoverMenu] = useState(true);
  const [clickMenu, setClickMenu] = useState(true);

  const [hoverclose, setHoverclose] = useState(true);

  const [scroll, setScroll] = useState(42);
  const [scrollrotate, setScrollrotate] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", (e: any)=>{
      // console.log(e.path[1].scrollY)
      let axeY = e.path[1].scrollY
      axeY = axeY / 500

      console.log(axeY)
      setScrollrotate(axeY)
      setScroll(scroll - axeY)
    });  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  // console.log(scroll)
  return (
   <>
  <div className={styles.scene}>
      <Canvas
        shadows={true}
        className={styles.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.05} /> 
      <LightBulb position={[0, 0, 0]} scale={[scroll, scroll, scroll]} />
      <Box color={"#934039"} rotateX={3} rotateY={1} scale={[2, 2, 2]} position={[10-scrollrotate, 0, scrollrotate]}/>
      <Box color={"#934039"} rotateX={3} rotateY={2} scale={[2, 2, 2]} position={[-10+scrollrotate, 0, -scrollrotate]}/>
      <Box color={"#934039"} rotateX={3} rotateY={2} scale={[2, 2, 2]} position={[scrollrotate, 0, scrollrotate-20]}/>
      <Box color={"#934039"} rotateX={3} rotateY={2} scale={[2, 2, 2]} position={[-scrollrotate, 0, 10-scrollrotate]}/>

      </Canvas>
      <div className={styles.page}>
        <header>
          <div className={styles.logo}>
            <Link href={'#'}>PULSY</Link>
          </div>
          {/* menu burger */}
          <div className={styles.menu} onMouseOver={()=>{
              setHoverMenu((prevHoverMenu) => !prevHoverMenu)
            }} onClick={()=>{
              setClickMenu((prevClickMenu) => !prevClickMenu)
            }}>
            <div className={styles.menu1}></div>
            <div className={styles.menu1}></div>
            <div className={styles.menu2} style={{width: hoverMenu ? "30px" : "50px"} }></div>
          </div>
          {/* menu  */}
          <div className={styles.menuderou} style={{width: clickMenu ? "0vw" : "50vw"}}>

            <div className={styles.close} onMouseOver={()=>{
              setHoverclose((prevHoverclose) => !prevHoverclose)
            }} onClick={()=>{
              setClickMenu((prevClickMenu) => !prevClickMenu)
            }} style={{display: clickMenu ? "none" : "block"}}>
              <div className={styles.close1} style={{width: hoverclose ? "50px" : "30px"}}></div>
              <div className={styles.close2} style={{width: hoverclose ? "50px" : "30px"}}></div>

            </div>
            <ul>
              <li><Link href={'#'}>A propos de Moi</Link></li>
              <li><Link href={'#'}>Mes Projets</Link></li>
              <li><Link href={'#'}>Me contacter</Link></li>
            </ul>

          </div>
        </header>
        <section className={styles.title}>
          <div className={styles.title1}>
            <div>
              <h1>Pulsy BACKEKOLO</h1>
              <h2>Developpeur Web Front - End </h2>
            </div>
            <h3>
              <strong>{"<  "}</strong>
               Hello World, 
            Bienvenue sur mon portfolio ! <br />
            Vous pouvez en <Link href={'#'}>apprendre un peu plus</Link> sur moi ou <Link href={'#'}>découvrir mes projets</Link>. <strong>{" >"}</strong>
            </h3>
          </div>

        </section>
      </div>
           
  </div>    
   
   </>
  );
}


