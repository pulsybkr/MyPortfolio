import React from "react";
import LightBulb from "./LightBulb";
import { Canvas } from "@react-three/fiber";
import Box from '../compoments/Box';
import styles from '../styles/Home.module.css'

function CanvasElement(props:any) {
  return (
    <Canvas
        shadows={true}
        className={styles.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.05} /> 
      <LightBulb position={[0, 0, 0]} scale={[props.scalerotate, props.scalerotate, props.scalerotate]} />
      <Box color={"#934039"} rotateX={3} rotateY={1} scale={[2, 2, 2]} position={[10-props.rotate, 0, props.rotate]}/>
      <Box color={"#934039"} rotateX={3} rotateY={2} scale={[2, 2, 2]} position={[-10+props.rotate, 0, -props.rotate]}/>
      <Box color={"#934039"} rotateX={3} rotateY={2} scale={[2, 2, 2]} position={[props.rotate, 0, props.rotate-20]}/>
      <Box color={"#934039"} rotateX={3} rotateY={2} scale={[2, 2, 2]} position={[-props.rotate, 0, 10-props.rotate]}/>

      </Canvas>
  );
}

export default CanvasElement;