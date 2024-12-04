import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ticofab = ({ isMobile }) => {
  const tico = useGLTF("./spaceShip/scene.gltf");

  return (
    <mesh>
      {/* Global ambient light for general brightness */}
      <ambientLight intensity={0.5} />
      
      {/* Directional light for focused lighting */}
      <directionalLight
        position={[10, 10, 10]} // Light coming from top-right
        intensity={1.5}
        castShadow
      />
      <directionalLight
        position={[-10, 10, -10]} // Light coming from top-left
        intensity={1.2}
        castShadow
      />

      {/* Point lights to highlight specific areas */}
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.8} />

      {/* Space ship model */}
      <primitive
        object={tico.scene}
        scale={isMobile ? 0.3 : 0.6} // Reduced scale for smaller size
        position={[0, -1, 0]} // Centered position
        rotation={[0, Math.PI /180, 0]} // Rotated for better alignment
      />
    </mesh>
  );
};

const TicofabCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [1, 50, 10], fov: 50 }} // Camera moved farther back
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5} // Slower auto-rotation for smoother effect
          enableZoom={false} // Enable zoom for exploration
          minDistance={30} // Prevent zooming too close
          maxDistance={100} // Allow zooming far out
          maxPolarAngle={Math.PI / 2} // Prevent flipping
          minPolarAngle={0} // Prevent flipping
        />
        <Ticofab isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default TicofabCanvas;





