import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";

import { TextureLoader } from "three";

import PlanetInfo from "../PlanetInfo/PlanetInfo";

import ExoplanetTexture from "../../assets/exoplanet.png";
import { useFrame } from "@react-three/fiber";

const Exoplanet = () => {
  const planetRef = useRef();
  const controls = useRef();

  const [planetClicked, setPlanetClicked] = useState(false);

  const texture = new TextureLoader().load(ExoplanetTexture);

  const planetClickHandler = () => {
    setPlanetClicked(true);

    // alert("planet clicked!");
  };

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.z += 0.001;
    }
  });

  return (
    <>
      <mesh ref={planetRef} onClick={planetClickHandler}>
        {planetClicked === false && (
          <OrbitControls
            ref={controls}
            minDistance={3}
            maxDistance={6}
            dampingFactor={0.1}
          />
        )}
        {planetClicked && <PlanetInfo />}
        <sphereGeometry args={[1, 128, 128]} />
        <meshStandardMaterial map={texture} roughness={0.5} color="#ffffff" />
      </mesh>
    </>
  );
};

export default Exoplanet;
