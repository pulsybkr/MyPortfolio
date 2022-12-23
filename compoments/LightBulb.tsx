import React from "react";

function LightBulb(props:any) {
  return (
    <mesh {...props} >
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 50, 100]} />
      <meshPhongMaterial emissive={"#4bd9c3"}  />
    </mesh>
  );
}

export default LightBulb;