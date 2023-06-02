import backgroundImage from '../public/wave-haikei9.svg';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {

    return(
        <div className="navbar">
            <Image src={backgroundImage} alt="background image" style={{ objectFit: 'cover', position: 'absolute', zIndex: '-10'}} ></Image>
            <section className="nav-links">
                <Link href={'/'} className='nav-item'>Lorem</Link>
                <Link href={'/'} className='nav-item'>Ipsum</Link>
                <Link href={'/'} className='nav-item'>Dolor</Link>
            </section>
        </div>
    )
}

export default Navbar;