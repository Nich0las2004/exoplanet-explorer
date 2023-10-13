import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import Exoplanet from "../Exoplanet/Exoplanet";

import classes from "./Scene.module.css";

const Scene = () => {
  return (
    <Canvas className={classes.canvas}>
      <Exoplanet />
      <Stars />
    </Canvas>
  );
};

export default Scene;
