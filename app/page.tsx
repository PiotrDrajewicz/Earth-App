'use client'

import { Canvas, useThree  } from "@react-three/fiber";
// import Earth from './Earth';
import Box from './Box';
import { OrbitControls, Stars } from "@react-three/drei";
// import Model from './Model';
// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Earth } from './Earth';
import GetInfo from "./GetInfo";
import { WebGL1Renderer, WebGLRenderer } from "three";


const HomePage = () => {
      

    return (
        <>
            <h1>Home for Earth.</h1>
            <section className="canvas-section">
                <Canvas className="canvas" >
                    <OrbitControls enableZoom={false}/>
                    {/* <Stars /> */}
                    <ambientLight intensity={0.5}/>
                    <directionalLight position={[-2, 5, 2]} intensity={1}/>
                    <GetInfo />
                    <Earth />
                </Canvas>
            </section>
        </>

    )
}

export default HomePage;

// gl={canvas => new WebGL1Renderer({ canvas })}
// gl={{render: WebGL1Renderer}}
