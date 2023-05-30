'use client'

import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas, useThree  } from "@react-three/fiber";
import Box from './Box';
import { OrbitControls, Stars } from "@react-three/drei";
// import GetInfo from "./GetInfo";
// import { WebGL1Renderer, WebGLRenderer } from "three";
import { EarthMarkers } from './EarthMarkers';
import CityPhoto from "./CityPhoto";


const HomePage: React.FC = () => {
    const [cityHover, setCityHover] = useState<string>('');

    return (
        <>
            <div className="title-all">
                {/* <section className="title-photo-section">
                    <CityPhoto />
                </section> */}
                <section className="canvas-section">
                    <div className='page-title-section'>
                        <h1 className="page-title">GLOBE<span className="title-span">GUIDER</span></h1>
                        <h2 className="page-subtitle">Breathtaking adventures</h2>
                    </div>
                    <Canvas className="canvas" >
                        <OrbitControls enableZoom={false}/>
                        <ambientLight intensity={0.3}/>
                        <directionalLight position={[-2, 3, 2]} intensity={1} />
                        <EarthMarkers setCityHover={setCityHover} />
                    </Canvas>
                    <CityPhoto cityHover={cityHover} />
                    {/* <CityPhoto cityHover={cityHover} /> */}
                </section>
            </div>
        </>

    )
}

export default HomePage;

// gl={canvas => new WebGL1Renderer({ canvas })}
// gl={{render: WebGL1Renderer}}
