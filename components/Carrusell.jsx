import { useState } from "react";
import PhotoPlaceHolder from "./PhotoPlaceHolder";
import "./Carrusell.css";

const paths = {
  1: "./sample3.jpg",
  2: "./sample4.jpg",
  3: "./sample1.jpg",
  4: "./sample2.jpg"
};

const Carrusell = () => {
  const [pos, setPos] = useState(1);

  const toggleNext = () => {
    if (pos < 4) {
      setPos(pos + 1);
    }
  };

  const toggleBefore = () => {
    if (pos > 1) {
      setPos(pos - 1);
    }
  };

  return (
    <div className="carrusell-container">
      <h3>Proceso ... versión NO oficial</h3>
      <br></br>
      <div className="carrusell-wrapper">
        <PhotoPlaceHolder
          key={paths[pos]}
          picPath={paths[pos]}
          goNext={toggleNext}
          goBefore={toggleBefore}
          currentPos={pos}
          totalImages={4}
          canGoNext={pos < 4}
          canGoBefore={pos > 1}
        />
      </div>
    </div>
  );
};

export default Carrusell;