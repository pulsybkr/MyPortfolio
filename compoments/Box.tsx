import React from "react";

function Box(props:any) {
  return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <sphereGeometry/>
      
      {/* <boxBufferGeometry /> */}
      <meshPhysicalMaterial  color={props.color} />
    </mesh>
  );
}
export default Box;