// 'use client'
import { useRef } from "react";

let path: any = document.querySelector('path');
let lineContainer: any = document.querySelector('.line-container');

const ServicesLines = () => {
    const pathRef = useRef<any>();
    
    
    // let pathLength = pathRef.current.getTotalLength();
    if (path) {
        console.log('tak');
        // let pathLength = path?.getTotalLength();
        // path.style.strokeDasharray = pathLength + ' ' + pathLength;
        // path.style.strokeDashoffset = pathLength;
        // window.addEventListener('scroll', () => {
        //     var scrollPercentage = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
        
        //     var drawLength = pathLength * scrollPercentage;
        
        //     path.style.strokeDashoffset = pathLength - drawLength;
        // })

        let pathLength = path?.getTotalLength();
        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        path.style.strokeDashoffset = pathLength;
        window.addEventListener('scroll', () => {
            var scrollPercentage = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
        
            // var drawLength = (pathLength * scrollPercentage);
            var drawLength = (pathLength * scrollPercentage);
        
            path.style.strokeDashoffset = (pathLength - drawLength);
            console.log('s', document.documentElement.clientHeight);
        })
        
    }


    

    return (
        <div className="line-container">
            <svg className="line-svg" viewBox="0 0 153 864" fill="none" preserveAspectRatio="xMidYMax meet">
                <path ref={pathRef} d="M66.6079 0V222L149.608 305L66.6079 388V456C18.6079 448.667 -48.5921 462.8 66.6079 578C181.808 693.2 114.608 778 66.6079 806V864" stroke="black" strokeWidth="4"/>
            </svg>
        </div>
    )
}

// width="153" height="864"

export default ServicesLines;