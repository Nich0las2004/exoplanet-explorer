import { Html } from "@react-three/drei";

const PlanetInfo = () => {
  return (
    <Html center>
      <div className="planet-info">
        <div className="planet-info-content">
          <div className="planet-info-title">
            <h2>Name</h2>
          </div>
          <p>Description</p>
        </div>
      </div>
    </Html>
  );
};

export default PlanetInfo;
