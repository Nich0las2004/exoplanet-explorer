import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import Exoplanet from "../Exoplanet/Exoplanet";

import classes from "./Scene.module.css";

const Scene = () => {
  return (
    <Canvas className={classes.canvas}>
      <ambientLight intensity={0.5} color="white" />
      <Exoplanet />
      <Stars />
      <pointLight
        position={[5, 0, 0]}
        intensity={2}
        color="red"
        castShadow={true}
      />
    </Canvas>
  );
};

export default Scene;
