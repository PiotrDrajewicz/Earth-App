// 'use client'
import { useRef, useCallback, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

interface ServicesLinesInterface {
    aboutUsInView: boolean;
}

const line1Variants = {
    initial: {
        opacity: 1,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2.5,
        }
    }
}


const ServicesLines: React.FC<ServicesLinesInterface> = ({aboutUsInView}) => {

    const { ref: ref1, inView: inView1, entry: entry1 } = useInView({
        threshold: 0.2,
        triggerOnce: !aboutUsInView,
    });
    const { ref: ref2, inView: inView2, entry: entry2 } = useInView({
        threshold: 0.45,
        triggerOnce: !aboutUsInView,
    });
    const { ref: ref3, inView: inView3, entry: entry3 } = useInView({
        threshold: 0.6,
        triggerOnce: !aboutUsInView,
    });
    const { ref: ref4, inView: inView4, entry: entry4 } = useInView({
        threshold: 0.8,
        triggerOnce: !aboutUsInView,
    });
    const { ref: ref5, inView: inView5, entry: entry5 } = useInView({
        threshold: 0.95,
        triggerOnce: !aboutUsInView,
    });

    const setRefs = useCallback(
        (node: any) => {
            ref1(node);
            ref2(node);
            ref3(node);
            ref4(node);
            ref5(node);
        }
    , [])


    return (
        <div ref={setRefs} className="line-container">
            <div className="services-text-container">
                <article className="services-article">
                    {inView1 && <motion.h3 id="guide-item" className="services-subtitle" initial={{opacity: 0}} animate={{opacity: 1, transform: 'translateX(-200px)'}} transition={{duration: 2, delay: 0.6}}>Guide</motion.h3>}
                    {inView1 && <motion.p id="guide-item" className="services-subtitle" initial={{opacity: 0}} animate={{opacity: 1, transform: 'translateX(-200px)' }} transition={{duration: 2, delay: 0.8}}>We offer local guide</motion.p>}
                </article>
                <article className="services-article">
                    {inView2 && <motion.h3 id="transport-item" className="services-subtitle" initial={{opacity: 0}} animate={{opacity: 1, transform: 'translateX(200px)'}} transition={{duration: 2, delay: 0.8}}>Transport</motion.h3>}
                    {inView2 && <motion.p id="guide-item" className="services-subtitle" initial={{opacity: 0}} animate={{opacity: 1, transform: 'translateX(200px)' }} transition={{duration: 2, delay: 0.6}}>You will get around</motion.p>}
                </article>
                <article className="services-article">
                    {inView3 && <motion.h3 id="dinner-item" className="services-subtitle" initial={{opacity: 0}} animate={{opacity: 1, transform: 'translateX(-200px)'}} transition={{duration: 2, delay: 0.6}}>Dinner</motion.h3>}
                    {inView3 && <motion.p id="guide-item" className="services-subtitle" initial={{opacity: 0}} animate={{opacity: 1, transform: 'translateX(-200px)' }} transition={{duration: 2, delay: 0.8}}>Hot meal for everyone</motion.p>}
                </article>
                <article className="services-article">
                    {inView4 && <motion.h3 id="freeTime-item" className="services-subtitle" initial={{opacity: 0}} animate={{opacity: 1, transform: 'translateX(200px)'}} transition={{duration: 2, delay: 0.8}}>Free time</motion.h3>}
                    {inView4 && <motion.p id="guide-item" className="services-subtitle" initial={{opacity: 0}} animate={{opacity: 1, transform: 'translateX(200px)' }} transition={{duration: 2, delay: 0.6}}>On hour to walk around</motion.p>}
                </article>
                <article className="services-article">
                    {inView5 && <motion.h3 id="souvenir-item" className="services-subtitle" initial={{opacity: 0}} animate={{opacity: 1, transform: 'translateX(-200px)'}} transition={{duration: 2, delay: 0.6}}>Souvenir</motion.h3>}
                    {inView5 && <motion.p id="guide-item" className="services-subtitle" initial={{opacity: 0}} animate={{opacity: 1, transform: 'translateX(-200px)' }} transition={{duration: 2, delay: 0.8}}>Opportunity to buy souvenir from local artist</motion.p>}
                </article>
            </div>
            <svg className="lines-svg" viewBox="-3 0 116 444" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
                {inView1 && <motion.path d="M56.5 2.5C50.5 3.83333 39.4 11.3 43 30.5C47.5 54.5 74 80 74 118.5C74 157 12.5 143.5 6.5 143" stroke="#F13737" strokeWidth="5" variants={line1Variants} initial='initial' animate='visible' strokeLinecap='round'/>}
                {inView2 && <motion.path d="M55.5 152C47.7486 161.5 42 185 55.5 207.5C71.7 234.5 97.5 229 110 225" stroke="#F13737" strokeWidth="5" variants={line1Variants} initial='initial' animate='visible' strokeLinecap='round'/>}
                {inView3 && <motion.path d="M55.5 223C63.2514 232.5 69 256 55.5 278.5C39.3 305.5 13.5 300 0.999962 296" stroke="#F13737" strokeWidth="5" variants={line1Variants} initial='initial' animate='visible' strokeLinecap='round'/>}
                {inView4 && <motion.path d="M55.1101 294C47.3587 303.5 41.6101 327 55.1101 349.5C71.3101 376.5 97.1101 371 109.61 367" stroke="#F13737" strokeWidth="5" variants={line1Variants} initial='initial' animate='visible' strokeLinecap='round'/>}
                {inView5 && <motion.path d="M55.5 365C63.2514 374.5 69 398 55.5 420.5C39.3 447.5 13.5 442 0.999962 438" stroke="#F13737" strokeWidth="5" variants={line1Variants} initial='initial' animate='visible' strokeLinecap='round'/>}
            </svg>
        </div>
    )
}

// fill="#F13737"

// width="153" height="864"
            /* <svg className="line-svg" viewBox="0 0 153 864" fill="none" preserveAspectRatio="xMidYMax meet">
                <path ref={pathRef} d="M66.6079 0V222L149.608 305L66.6079 388V456C18.6079 448.667 -48.5921 462.8 66.6079 578C181.808 693.2 114.608 778 66.6079 806V864" stroke="black" strokeWidth="4"/>
            </svg> */
            /* <svg ref={ref} className="line-svg" viewBox="0 0 160 439" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
                { inView && <motion.path d="M88.5 0.5V232.5C69.6667 245.5 25.9 266.8 1.5 248" stroke="black" stroke-width="4" variants={path1Variants} initial='initial' animate='visible'/>}
                <path d="M88 250V318.5C100.667 330.5 132.4 349.8 158 331" stroke="black" stroke-width="4"/>
                <path d="M89.5 348V415.5C81.6667 427.333 57.2 446.8 22 430" stroke="black" stroke-width="4"/>
            </svg> */

export default ServicesLines;