// 'use client'
import { useRef } from "react";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const path1Variants = {
    initial: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 5,
        }
    }
}

const ServicesLines = () => {
    // const pathRef = useRef<any>();

    const { ref, inView, entry } = useInView({
        threshold: 0.5,
    });
    
    
    return (
        <div className="line-container">
            {/* <svg className="line-svg" viewBox="0 0 153 864" fill="none" preserveAspectRatio="xMidYMax meet">
                <path ref={pathRef} d="M66.6079 0V222L149.608 305L66.6079 388V456C18.6079 448.667 -48.5921 462.8 66.6079 578C181.808 693.2 114.608 778 66.6079 806V864" stroke="black" strokeWidth="4"/>
            </svg> */}
            <svg ref={ref} className="line-svg" viewBox="0 0 160 439" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
                { inView && <motion.path d="M88.5 0.5V232.5C69.6667 245.5 25.9 266.8 1.5 248" stroke="black" stroke-width="4" variants={path1Variants} initial='initial' animate='visible'/>}
                <path d="M88 250V318.5C100.667 330.5 132.4 349.8 158 331" stroke="black" stroke-width="4"/>
                <path d="M89.5 348V415.5C81.6667 427.333 57.2 446.8 22 430" stroke="black" stroke-width="4"/>
            </svg>

        </div>
    )
}

// width="153" height="864"

export default ServicesLines;