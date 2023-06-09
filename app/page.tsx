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
import ServicesLines from "./ServicesLines";
import { useInView } from "react-intersection-observer";
import GuidesComponent from "./GuidesComponent";


const HomePage: React.FC = () => {
    const [cityHover, setCityHover] = useState<string>('');

    const { ref, inView, entry } = useInView({
        threshold: 0.99,
    });

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
            <section ref={ref} className="about-us-section">
                <h2 className="about-us-title text-width">About <span className="title-span">Us</span></h2>
                <h3 className={`about-us-text text-width`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat obcaecati aliquam modi quaerat? Ea atque dicta sed iure inventore blanditiis molestias quasi eaque reprehenderit unde repellat accusamus, ad necessitatibus veniam aut quas excepturi ipsum quibusdam sequi dignissimos aspernatur eum repellendus est officia. Accusamus consectetur, mollitia ipsam dolore voluptatem quo?</h3>
                <Image src={wavesAboutUs} alt="about us waves 1" style={{ zIndex: '-10', width: '100%', objectFit: 'cover'}} />
                <Image src={bottomWaves} alt="about us waves 2" style={{ zIndex: '-10', width: '100%', objectFit: 'cover', transform: 'translateY(-2px)'}} />
            </section>
            <section className="services-section">
                <h2 className="services-title text-width" >What Do <span className='title-span'>We</span> Offer</h2>
                <ServicesLines aboutUsInView={inView}/>
            </section>
            <section className="guides-section">
                <h2 className="guides-title text-width">Meet <span className="title-span">Our</span> Guides</h2>
                <GuidesComponent />
            </section>
        </>

    )
}

export default HomePage;

// gl={canvas => new WebGL1Renderer({ canvas })}
// gl={{render: WebGL1Renderer}}
