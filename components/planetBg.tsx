"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Stars } from "@react-three/drei";

const PlanetBg: React.FC = () => {
  return (
    <Canvas className="hidden md:block">
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={300} depth={60} count={5000} factor={7} saturation={0} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default PlanetBg;
