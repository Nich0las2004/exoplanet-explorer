const PlanetInfo = () => {
  return (
    <div className="planet-info" onClick={onClose}>
      <div className="planet-info-content">
        <h2>{planetInfo.name}</h2>
        <p>{planetInfo.description}</p>
      </div>
    </div>
  );
};

export default PlanetInfo;
