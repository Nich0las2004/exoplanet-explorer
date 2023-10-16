import { useState } from "react";
import { OrbitControls } from "@react-three/drei";

import { TextureLoader } from "three";

import ExoplanetTexture from "../../assets/exoplanet.png";

const Exoplanet = () => {
  const [planetClicked, setPlanetClicked] = useState(false);

  const texture = new TextureLoader().load(ExoplanetTexture);

  const planetClickHandler = () => {
    setPlanetClicked(() => !planetClicked);

    alert("planet clicked");
  };

  return (
    <mesh onClick={planetClickHandler}>
      <OrbitControls minDistance={3} maxDistance={6} dampingFactor={0.1} />
      <sphereGeometry args={[1, 128, 128]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default Exoplanet;
