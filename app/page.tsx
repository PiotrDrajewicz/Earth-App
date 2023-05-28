'use client'

// import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas, useThree  } from "@react-three/fiber";
import Box from './Box';
import { OrbitControls, Stars } from "@react-three/drei";
// import GetInfo from "./GetInfo";
// import { WebGL1Renderer, WebGLRenderer } from "three";
import { EarthMarkers } from './EarthMarkers';


const HomePage: React.FC = () => {     

    return (
        <>
            <div className="title-all">
                <section className="canvas-section">
                    <Canvas className="canvas" >
                        <OrbitControls enableZoom={false}/>
                        <ambientLight intensity={0.3}/>
                        <directionalLight position={[-2, 3, 2]} intensity={1} />
                        <EarthMarkers />
                    </Canvas>
                </section>
                <section className="page-title-section">
                    <h1 className="page-title">GLOBEGUIDER</h1>
                    <h2 className="page-subtitle">Breathtaking adventures</h2>
                </section>
            </div>
        </>

    )
}

export default HomePage;

// gl={canvas => new WebGL1Renderer({ canvas })}
// gl={{render: WebGL1Renderer}}
