import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { Model } from "./Model";
import {
  Environment,
  Lightformer,
  OrbitControls,
  PivotControls,
} from "@react-three/drei";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#e4e4e3",
        textAlign: "left",
      }}
    >
      <div style={{ flex: 6 }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
          <directionalLight castShadow intensity={0.6} position={[0, 0, 10]} />

          <Model />
          {/* <OrbitControls /> */}
          <Environment preset="park" />
        </Canvas>
      </div>
      <div
        style={{
          flex: 5,
          padding: "1rem",
          display: "flex",
          alignContent: "flex-start",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Text content goes here</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
}

export default App;
