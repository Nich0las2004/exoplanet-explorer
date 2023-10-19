import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import Exoplanet from "../Exoplanet/Exoplanet";

import classes from "./Scene.module.css";

const Scene = () => {
  return (
    <Canvas className={classes.canvas}>
      <ambientLight intensity={0.5} color="white" />
      <pointLight
        position={[0, 20, 10]}
        intensity={1}
        color="red"
        castShadow={true}
      />{" "}
      <Exoplanet />
      <Stars />
    </Canvas>
  );
};

export default Scene;
