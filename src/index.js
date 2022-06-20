import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Arrow } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Arrow
          x={150}
          y={150}
          points={[0, 0, 200, 200]}
          pointerLength={20}
          pointerWidth={20}
          fill={"black"}
          stroke={"black"}
          strokeWidth={4}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
