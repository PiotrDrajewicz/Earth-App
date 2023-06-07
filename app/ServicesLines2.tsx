// 'use client'
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// let path: any = document.querySelector('path');
// let lineContainer: any = document.querySelector('.line-container');

const ServicesLines2 = () => {
    let pathRef = useRef<any>();

    const { ref, inView, entry } = useInView({
        threshold: 0.25,
    });
    
    // let pathLength = pathRef.current.getTotalLength();
        // let pathLength = path?.getTotalLength();
        // path.style.strokeDasharray = pathLength + ' ' + pathLength;
        // path.style.strokeDashoffset = pathLength;
        // window.addEventListener('scroll', () => {
        //     var scrollPercentage = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
        
        //     var drawLength = pathLength * scrollPercentage;
        
        //     path.style.strokeDashoffset = pathLength - drawLength;
        // })

        function animateOnScroll(value: any) {
            let svgLength = pathRef.current.getTotalLength();
            pathRef.current.style.strokeDasharray = svgLength;
            pathRef.current.style.strokeDashoffset = svgLength;
            let draw = svgLength * value;

            pathRef.current.style.strokeDashoffset = svgLength - draw;
        }

        useEffect(() => {
            if (inView) {
                const handleScroll = () => {
                    // const value = window.scrollY;
                    const value = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight))/1;
                    console.log('value: ', value);
                    animateOnScroll(value);
                }
    
                window.addEventListener('scroll', handleScroll);
    
                return () => {
                    window.removeEventListener('scroll', handleScroll);
                }
            }
        }, [inView])        


    

    return (
        <div className="line-container">
            <svg ref={ref} className="line-svg" viewBox="0 0 153 864" fill="red" preserveAspectRatio="xMidYMax meet">
                <path ref={pathRef} d="M66.6079 0V222L149.608 305L66.6079 388V456C18.6079 448.667 -48.5921 462.8 66.6079 578C181.808 693.2 114.608 778 66.6079 806V864" stroke="black" strokeWidth="4"/>
            </svg>
        </div>
    )
}

// width="153" height="864"

export default ServicesLines2;