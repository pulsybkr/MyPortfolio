import styles from '../styles/Home.module.css'
import { Canvas } from "@react-three/fiber";
import LightBulb from '../compoments/LightBulb';
import Box from '../compoments/Box';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

export default function Home() {
  const [scroll, setScroll] = useState(42);
  const [scrollrotate, setScrollrotate] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", (e)=>{
      // console.log(e.path[1].scrollY)
      let axeY = e.path[1].scrollY
      axeY = axeY / 500

      console.log(axeY)
      setScrollrotate(axeY)
      setScroll(scroll - axeY)
    });  
  }, []);
 
  // console.log(scroll)

  const boxRef = useRef();

useLayoutEffect(() => {
  // Refs allow you to access DOM nodes
  console.log(boxRef) // { current: div.box }
  // then we can animate them like so...
  gsap.to(boxRef.current, {
    rotation: "+=360"
  });
});
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
        <h1 className="box">Hello</h1>
      </div>

  </div>
    
   
   </>
  );
}


