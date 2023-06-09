'use client'
import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const SvgPage: React.FC = () => {
    let pathRef = useRef<any>();
    let lineContainerRef = useRef<any>();
    let randomContainer = useRef<any>();
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    function animateOnScroll(value: any) {
        let svgLength = pathRef.current.getTotalLength();
        //długość jednego
        pathRef.current.style.strokeDasharray = svgLength/1;
        pathRef.current.style.strokeDashoffset = svgLength;
        let draw = svgLength * value;

        pathRef.current.style.strokeDashoffset = svgLength - draw;
        // console.log(value);
    }

    useEffect(() => {
        // if (inView) {
            const handleScroll = () => {
                // const value = window.scrollY / 1000;
                const value = (((document.documentElement.scrollTop-260)/716)*1)/2;
                // const value = ((document.documentElement.scrollTop - lineContainerRef.current.scrollHeight));
                // console.log('value: ', ((document.documentElement.scrollTop - lineContainerRef.current.scrollHeight)));
                // console.log('value: ', lineContainerRef.current.clientHeight);

                //2
                let height = lineContainerRef.current.clientHeight;
                let scrollHeight = document.documentElement.scrollHeight - height;
                let scrollTop = lineContainerRef.current.scrollTop;
                let percent = Math.floor(scrollTop/scrollHeight * 100);
                // console.log('percent: ', ((document.documentElement.scrollTop)/(document.documentElement.scrollHeight))*200);
                console.log(((document.documentElement.scrollTop-260)/716)*1);
                animateOnScroll(value);
            }
            
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
        // }

    }, [])

    return (
        <section className="all-section">

            <div ref={randomContainer} className="random-container">
                random
            </div>

            <div ref={lineContainerRef} className="svg-test-container">
                <svg ref={ref} className="line-test-svg" viewBox="0 0 168 722" fill="yellow" preserveAspectRatio="xMidYMax meet">
                    <path ref={pathRef} d="M85.5 0.5V247.5M85.5 247.5C73.5 265.833 40 297 2 275M85.5 247.5V372M85.5 372V493M85.5 372C89.6984 381.258 101.74 394.41 123 397.174C134.654 398.689 149.079 397.082 166.5 390M85.5 493C71.8333 512.333 36 545.2 2 522M85.5 493V628.5C110.5 644.167 145.5 682.8 85.5 712C10.5 748.5 21.5 645.5 60 656.5" stroke="#F82121" stroke-width="4"/>
                </svg>

            </div>
        </section>
    )
}

export default SvgPage;