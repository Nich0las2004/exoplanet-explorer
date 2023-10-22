import { Html } from "@react-three/drei";

import classes from "./PlanetInfo.module.css";

const PlanetInfo = () => {
  return (
    <Html center>
      <div className={classes.planetInfo}>
        <div className="planet-info-content">
          <div className="planet-info-title">
            <h2 className={classes.planetName}>Name:</h2>
            <p className={classes.planetName}>Terra Nova</p>
          </div>
          <div className="planet-info-description">
            <h2 className={classes.planetDescription}>Description:</h2>
            <p className={classes.planetDescription}>
              Terra Nova is a breathtaking exoplanet located in the distant
              reaches of the Milky Way galaxy. With its striking similarities to
              Earth, it has become a subject of fascination and exploration
              among astronomers and space enthusiasts. Terra Nova is often
              referred to as the "Twin Earth" due to its remarkable resemblance
              to our home planet. Terra Nova boasts a diverse landscape of lush
              green continents, vast blue oceans, and towering mountain ranges.
              Its rich and vibrant ecosystems are teeming with life, making it a
              promising candidate for further study in the search for
              extraterrestrial life. The planet's atmosphere is a harmonious
              blend of oxygen and nitrogen, ensuring a breathable environment
              for potential future explorers. Its skies are painted with
              brilliant shades of blue and occasional wisps of white clouds,
              creating an awe-inspiring view for those lucky enough to gaze upon
              it. Terra Nova's climate is equally intriguing, featuring seasons,
              gentle breezes, and occasional rainfalls. The planet's geology
              reveals a history of tectonic activity, with seismic wonders
              waiting to be uncovered. As Terra Nova continues to captivate our
              imaginations, it represents a symbol of hope for the future of
              space exploration and the quest to discover new life forms in the
              cosmos.
            </p>
          </div>
        </div>
      </div>
    </Html>
  );
};

export default PlanetInfo;
