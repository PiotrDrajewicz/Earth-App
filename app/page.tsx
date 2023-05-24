'use client'

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas, useThree  } from "@react-three/fiber";
// import Earth from './Earth';
import Box from './Box';
import { OrbitControls, Stars } from "@react-three/drei";
// import Model from './Model';
// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { Earth2 } from './Earth2';
import GetInfo from "./GetInfo";
import { WebGL1Renderer, WebGLRenderer } from "three";
import { Model } from './EarthBallStart3';
// import { Model } from './Scene';
import { EarthMarkers } from './EarthMarkers';


const HomePage = () => {     

    return (
        <>
            <h1>Home for Earth.</h1>
            <section className="canvas-section">
                <Canvas className="canvas" >
                    <OrbitControls enableZoom={false}/>
                    {/* <Stars /> */}
                    <ambientLight intensity={0.3}/>
                    <directionalLight position={[-2, 3, 2]} intensity={1} />
                    {/* <GetInfo /> */}
                    <EarthMarkers />
                </Canvas>
            </section>
        </>

    )
}

export default HomePage;

// gl={canvas => new WebGL1Renderer({ canvas })}
// gl={{render: WebGL1Renderer}}