"use client";

import React, { useRef, useEffect, ComponentRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import { usePathname } from "next/navigation";
import * as THREE from "three";
import styles from "./Scene.module.css";

function Blob() {
    const mesh = useRef<THREE.Mesh>(null!);
    const material = useRef<ComponentRef<typeof MeshDistortMaterial>>(null!);
    const pathname = usePathname();
    const isLoeka = pathname.includes("theone");

    const mouse = useRef(new THREE.Vector2(0, 0));
    const smoothMouse = useRef(new THREE.Vector2(0, 0));
    const customTime = useRef(0);

    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setHasLoaded(true), 100);
        
        const onMove = (e: MouseEvent) => {
            mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
            mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener("mousemove", onMove);
        return () => {
            window.removeEventListener("mousemove", onMove);
            clearTimeout(timer);
        };
    }, []);

    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime();
        const isProjectPage = pathname.includes("/project/");

        smoothMouse.current.lerp(mouse.current, 0.08);

        const distance = mouse.current.length();
        const rippleStrength = Math.pow(Math.max(0, 1.0 - distance), 3);
        const speedMultiplier = 1.0 + (rippleStrength * 4.0);
        customTime.current += delta * speedMultiplier;

        if (material.current) {
            const targetDistort = isProjectPage ? 0.05 : (0.15 + (rippleStrength * 0.5));
            material.current.distort = THREE.MathUtils.lerp(material.current.distort, targetDistort, 0.1);
            material.current.time = customTime.current;
            material.current.opacity = THREE.MathUtils.lerp(material.current.opacity, isProjectPage ? 0.4 : 1, 0.05);
        }

        const baseScale = isProjectPage ? 0.6 : 1.1;
        const targetScale = hasLoaded ? baseScale : 0;
        const targetZ = isProjectPage ? -2 : 0;

        mesh.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.03);
        mesh.current.position.z = THREE.MathUtils.lerp(mesh.current.position.z, targetZ, 0.05);

        mesh.current.rotation.x = t * 0.2;
        mesh.current.rotation.y = t * 0.25;
        mesh.current.rotation.z += delta * 0.1;

        mesh.current.position.x = (smoothMouse.current.x * 0.4) + Math.sin(t * 0.5) * 0.1;
        mesh.current.position.y = (smoothMouse.current.y * 0.4) + Math.cos(t * 0.3) * 0.1;
    });

    return (
        <Float speed={4} rotationIntensity={1.5} floatIntensity={2}>
            <mesh ref={mesh}>
                <torusKnotGeometry args={[1, 0.35, 512, 128]} />
                <MeshDistortMaterial
                    ref={material}
                    color={isLoeka ? "#FF0000" : "#5D3FD3"}
                    speed={0}
                    distort={0.15}
                    roughness={0.1}
                    metalness={0.8}
                    iridescence={1}
                    iridescenceIOR={1.5}
                    iridescenceThicknessRange={[100, 400]}
                    transparent={true}
                />
            </mesh>
        </Float>
    );
}

export default function Scene() {
    return (
        <div className={styles.sceneContainer}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
            >
                <pointLight position={[-10, 5, 5]} intensity={5} color="#8A2BE2" />
                <pointLight position={[10, -5, 5]} intensity={5} color="#FF00FF" />
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} intensity={2.5} color="#5D3FD3" />
                <Blob />
            </Canvas>
        </div>
    );
}