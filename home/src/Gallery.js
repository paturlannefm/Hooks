import React, { useState } from "react";
import PICTURES from "./data/pictures";

import { useDynamicTransition } from "./hooks";

const SECONDS = 1000;
const minimumDELAY = 1 * SECONDS;
const minimumINCREMENT = 1;

function Gallery() {
  const [delay, setDelay] = useState(3 * SECONDS);
  const [increment, setIncrement] = useState(1);

  const index = useDynamicTransition({
    delay,
    increment,
    length: PICTURES.length,
  });

  const updateDelay = (event) => {
    const delay = Number(event.target.value) * 1000;

    setDelay(delay < minimumDELAY ? minimumDELAY : delay);
  };

  const updateIncrement = (event) => {
    const increment = Number(event.target.value);

    setIncrement(increment < minimumINCREMENT ? minimumINCREMENT : increment);
  };

  return (
    <div className="Gallery">
      <img src={PICTURES[index].image} alt="gallery" />
      <div className="multiform">
        <div>
          Gallery transition delay (seconds):
          <input type="number" onChange={updateDelay} />
        </div>
        <div>
          Gallery increment:
          <input type="number" onChange={updateIncrement} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
