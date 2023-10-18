import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import Exoplanet from "../Exoplanet/Exoplanet";

import classes from "./Scene.module.css";

const Scene = () => {
  return (
    <Canvas className={classes.canvas}>
      <Exoplanet />
      <Stars />
      <pointLight position={[5, 5, 5]} intensity={1} color="red" />
    </Canvas>
  );
};

export default Scene;
