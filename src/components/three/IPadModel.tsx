"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useTexture, Center } from "@react-three/drei";
import * as THREE from "three";

export function IPadModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/scene.gltf");
  const { pointer } = useThree();
  const screenTexture = useTexture("/textures/screenshot.png");

  useEffect(() => {
    screenTexture.flipY = true;
    screenTexture.colorSpace = THREE.SRGBColorSpace;
    screenTexture.center.set(0.5, 0.5);
    screenTexture.rotation = Math.PI / 2;
    // Scale down slightly so screenshot sits within the bezel
    screenTexture.repeat.set(1.05, 1.05);
    screenTexture.needsUpdate = true;

    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      // Find the screen — match by mesh name or material name
      const isScreen =
        child.name.toLowerCase().includes("screen") &&
        !child.name.toLowerCase().includes("front");

      if (isScreen) {
        console.log("Replacing screen texture on:", child.name);
        child.material = new THREE.MeshBasicMaterial({
          map: screenTexture,
        });
        child.material.needsUpdate = true;
      }

      // Hide Apple Pencil nodes
      if (
        child.name === "Apple Pencil" ||
        child.name === "Apple logo.001" ||
        child.name === "Text" ||
        child.name === "Line"
      ) {
        child.visible = false;
      }
    });
  }, [scene, screenTexture]);

  useFrame((state) => {
    if (!groupRef.current) return;

    const elapsed = state.clock.elapsedTime;

    const targetY = pointer.x * 0.15 + Math.sin(elapsed * 0.3) * 0.05;
    const targetX = pointer.y * -0.08;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      0.05
    );

    groupRef.current.position.y = Math.sin(elapsed * 0.5) * 0.03;
  });

  return (
    <group ref={groupRef}>
      <Center>
        <primitive
          object={scene}
          scale={0.038}
          rotation={[0, Math.PI * 0.08, Math.PI / 2]}
        />
      </Center>
    </group>
  );
}

useGLTF.preload("/models/scene.gltf");
