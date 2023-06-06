'use client'

import Image from "next/image";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas, useThree  } from "@react-three/fiber";
import Box from './Box';
import { OrbitControls, Stars } from "@react-three/drei";
// import GetInfo from "./GetInfo";
// import { WebGL1Renderer, WebGLRenderer } from "three";
import { EarthMarkers } from './EarthMarkers';
import CityPhotos from "./CityPhotos";
import wavesAboutUs from '../public/layered-waves-haikei3.svg';
import bottomWaves from '../public/bottomWaves.svg';


const HomePage: React.FC = () => {
    const [cityHover, setCityHover] = useState<string>('');

    return (
        <>
            {/* <div className="nav-wave"></div> */}
            {/* <SvgComponent /> */}
            <div className="title-all">
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
                    <CityPhotos cityHover={cityHover} />
                </section>
            </div>
            <section className="about-us-section">
                <h2 className="about-us-title text-width">About <span className="title-span">Us</span></h2>
                <h3 className="about-us-text text-width">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat obcaecati aliquam modi quaerat? Ea atque dicta sed iure inventore blanditiis molestias quasi eaque reprehenderit unde repellat accusamus, ad necessitatibus veniam aut quas excepturi ipsum quibusdam sequi dignissimos aspernatur eum repellendus est officia. Accusamus consectetur, mollitia ipsam dolore voluptatem quo?</h3>
                <Image src={wavesAboutUs} alt="about us waves 1" style={{ zIndex: '-10', width: '100%', objectFit: 'cover'}} />
                <Image src={bottomWaves} alt="about us waves 2" style={{ zIndex: '-10', width: '100%', objectFit: 'cover'}} />
            </section>
            <section className="services-section">
                <h2>Lorem</h2>
                <svg width="153" height="864" viewBox="0 0 153 864" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M66.6079 0V222L149.608 305L66.6079 388V456C18.6079 448.667 -48.5921 462.8 66.6079 578C181.808 693.2 114.608 778 66.6079 806V864" stroke="black" stroke-width="4"/>
                </svg>
            </section>
        </>

    )
}

export default HomePage;

// gl={canvas => new WebGL1Renderer({ canvas })}
// gl={{render: WebGL1Renderer}}
