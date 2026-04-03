"use client";

import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { IPadModel } from "./IPadModel";

export function IPadScene() {
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    // Only show 3D on larger screens with WebGL support
    const hasWebGL = (() => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          canvas.getContext("webgl2") || canvas.getContext("webgl")
        );
      } catch {
        return false;
      }
    })();

    const isLargeScreen = window.innerWidth >= 640;
    setShow3D(hasWebGL && isLargeScreen);
  }, []);

  if (!show3D) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="rounded-2xl border border-drywall bg-white/50 px-12 py-20 text-center">
          <p className="font-mono text-sm text-dusk">
            iPad-first AI workflows
          </p>
        </div>
      </div>
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 35 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ height: "100%", width: "100%" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          color="#fff5e6"
        />
        <Environment preset="city" />
        <IPadModel />
      </Suspense>
    </Canvas>
  );
}
