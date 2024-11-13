"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import planetData from "@/components/planetData";
import { extend } from "@react-three/fiber";
import sunTexture from "@/public/planets/sun.jpg";
import React, { Suspense } from "react";
const StstemSolaire = () => {
  return (
    <Canvas
      className="hidden lg:block"
      camera={{ position: [0, 15, 0], fov: 100 }}
    >
      <Suspense fallback={null}>
        <Sun />
        {planetData.map((planet) => (
          <Planet planet={planet} key={planet.id} />
        ))}
        <Lights />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default StstemSolaire;

function Sun() {
  const texture = useLoader(THREE.TextureLoader, sunTexture.src);
  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

interface PlanetData {
  id: number;
  color: string;
  xRadius: number;
  zRadius: number;
  size: number;
  speed: number;
  offset: number;
  rotationSpeed: number;
  textureMap: string;
}

interface PlanetProps {
  planet: PlanetData;
}

function Planet({ planet }: PlanetProps) {
  const { xRadius, zRadius, size, speed, offset, rotationSpeed, textureMap } =
    planet;
  const planetRef = React.useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, textureMap);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);
    if (planetRef.current) {
      planetRef.current.position.x = x;
      planetRef.current.position.z = z;
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
  );
}

function Lights() {
  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
    </>
  );
}

extend({ Line: THREE.Line });

interface EclipticProps {
  xRadius?: number;
  zRadius?: number;
}

const Ecliptic: React.FC<EclipticProps> = ({ xRadius = 1, zRadius = 1 }) => {
  const points: THREE.Vector3[] = [];

  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <primitive
      object={
        new THREE.Line(
          lineGeometry,
          new THREE.LineBasicMaterial({ color: "#BFBBDA" })
        )
      }
    />
  );
};
