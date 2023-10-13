import { OrbitControls } from "@react-three/drei";

const Exoplanet = () => {
  return (
    <mesh>
      <OrbitControls />
      <sphereGeometry />
    </mesh>
  );
};

export default Exoplanet;
