'use client'
import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import mmm from '../../public/responsiveM.jpg';

const SvgPage: React.FC = () => {
    
    const people: {name: string, age: number}[] = [
        {name: 'Tom', age: 24},
        {name: 'Alex', age: 14},
        {name: 'Julia', age: 66},
        {name: 'Tom', age: 38},
        {name: 'Veronika', age: 59}
    ]

    const deletePeople = (array: {name: string, age: number}[]) => {
        const newPeople: {name: string, age: number}[] = array.filter(element => element.name !== 'Tom');
        return newPeople;
    }

    // console.log(deletePeople(people));

    return (
        <section className="all-section">
            <div className="demo-container">
                <div className="demo-text-container">
                    <h3 className="demo-title">Mountains</h3>
                    <p className="demo-subtitle">Those are responsive mountains</p>
                </div>
                <div className="demo-photo-container">
                    <Image className='demo-photo' fill={true} src={mmm} alt='photo of mountains' />
                    {/* <img className='demo-photo' src="https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="p" /> */}
                </div>
            </div>
        </section>
    )
}

export default SvgPage;