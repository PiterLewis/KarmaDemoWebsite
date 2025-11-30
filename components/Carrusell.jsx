import { useState } from "react";
import PhotoPlaceHolder from "./PhotoPlaceHolder";
import "./Carrusell.css";

const paths = {
  1: "./sample1.jpg",
  2: "./sample2.jpg",
  3: "./sample3.jpg",
  4: "./sample4.jpg",
  5: "./sample5.jpg",
  6: "./sample6.jpg"
};

const Carrusell = () => {
  const [pos, setPos] = useState(1);

  const toggleNext = () => {
    if (pos < 6) {
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
      <h3>Hasta ahora </h3>
      <br></br>
      <div className="carrusell-wrapper">
        <PhotoPlaceHolder
          key={paths[pos]}
          picPath={paths[pos]}
          goNext={toggleNext}
          goBefore={toggleBefore}
          currentPos={pos}
          totalImages={6}
          canGoNext={pos < 6}
          canGoBefore={pos > 1}
        />
      </div>
    </div>
  );
};

export default Carrusell;