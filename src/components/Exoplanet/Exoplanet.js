import { OrbitControls } from "@react-three/drei";

const Exoplanet = () => {
  return (
    <mesh>
      <OrbitControls minDistance={3} maxDistance={6} dampingFactor={0.1} />
      <sphereGeometry args={[1, 128, 128]} />
    </mesh>
  );
};

export default Exoplanet;
