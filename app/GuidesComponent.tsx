import Image from 'next/image';
import blobanimation from '../public/blobanimation.svg'
import blobAnimation2 from '../public/blobAnimation2.svg'
import faceBlob1 from '../public/faceBlob1.svg';
import faceBlob2 from '../public/faceBlob2.svg';
import faceBlob3 from '../public/faceBlob3.svg';
import { inView, motion, animate, stagger } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useCallback } from 'react';

const GuidesComponent: React.FC = () => {

    const staggerParent = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const staggerChildren = {
        hidden: {
            // transform: 'translateX(-500px)',
            x: -100,
            opacity: 0
        },
        visible: {
            // transform: 'translateX(0px)',
            x: 0,
            opacity: 1,
            transition: {
                duration: 5,
            }
        }
    }

    const { ref: ref1, inView: inView1, entry: entry1 } = useInView({
        threshold: 0.5,
        // triggerOnce: !aboutUsInView,
    });
    const { ref: ref2, inView: inView2, entry: entry2 } = useInView({
        threshold: 0.7,
        // triggerOnce: !aboutUsInView,
    });
    const { ref: ref3, inView: inView3, entry: entry3 } = useInView({
        threshold: 0.9,
        // triggerOnce: !aboutUsInView,
    });

    const setRefs = useCallback(
        (node: any) => {
            ref1(node);
            ref2(node);
            ref3(node);
            // ref4(node);
            // ref5(node);
        }
    , [])

    // animate('.guide-item',{transform: 'translateX(0px)'}, {delay: stagger(0.1)});

    return (
        <div ref={setRefs} className="guides-container">
            <div className="guides-texts">
                <motion.article className="guide-item" variants={staggerParent} initial='hidden' animate='visible'>
                    <motion.h3 className="guide-item-name" variants={staggerChildren} initial='hidden' animate='visible' >Marianne</motion.h3>
                    <motion.p className="guide-item-description" variants={staggerChildren} initial='hidden' animate='visible'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsum voluptas vitae adipisci omnis. Repudiandae ad similique deleniti ipsum perspiciatis!</motion.p>
                    <motion.div className="guide-item-underline" variants={staggerChildren} initial='hidden' animate='visible'></motion.div>
                </motion.article>
                <motion.article className="guide-item" variants={staggerParent} initial='hidden' animate='visible'>
                    <motion.h3 className="guide-item-name" variants={staggerChildren} initial='hidden' animate='visible'>Tom</motion.h3>
                    <motion.p className="guide-item-description" variants={staggerChildren} initial='hidden' animate='visible'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsum voluptas vitae adipisci omnis. Repudiandae ad similique deleniti ipsum perspiciatis!</motion.p>
                    <motion.div className="guide-item-underline" variants={staggerChildren} initial='hidden' animate='visible'></motion.div>
                </motion.article>
                <motion.article className="guide-item" variants={staggerParent} initial='hidden' animate='visible'>
                    <motion.h3 className="guide-item-name" variants={staggerChildren} initial='hidden' animate='visible'>Suzanne</motion.h3>
                    <motion.p className="guide-item-description" variants={staggerChildren} initial='hidden' animate='visible'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsum voluptas vitae adipisci omnis. Repudiandae ad similique deleniti ipsum perspiciatis!</motion.p>
                    <motion.div className="guide-item-underline" variants={staggerChildren} initial='hidden' animate='visible'></motion.div>
                </motion.article>
                {inView3 && <motion.div className="guides-button" initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 1, type: 'spring', stiffness: 260, damping: 20}}>And many more</motion.div>}
            </div>
            <div className="guides-photos">
                <div className="guides-blobs">
                    <Image id='blob-face-1' className='blob-face' src={faceBlob1} alt='face in blob 1'></Image>
                    <Image id='blob-face-2' className='blob-face' src={faceBlob2} alt='face in blob 2'></Image>
                    <Image id='blob-face-3' className='blob-face' src={faceBlob3} alt='face in blob 3'></Image>
                </div>
                <Image className='blob-img' src={blobAnimation2} alt='animated blob' />
            </div>
        </div>
    )
}

{/* <article className="guide-item">
{inView1 && <motion.h3 className="guide-item-name" initial={{transform: 'translateX(-500px)', opacity: 0}} animate={{ opacity: 1}} transition={{duration: 2, delay: 0.8}}>Marianne</motion.h3>}
{inView1 && <motion.p className="guide-item-description" initial={{transform: 'translateX(-500px)', opacity: 0}} animate={{opacity: 1}} transition={{duration: 2, delay: 0.6}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsum voluptas vitae adipisci omnis. Repudiandae ad similique deleniti ipsum perspiciatis!</motion.p>}
{inView1 && <motion.div className="guide-item-underline" initial={{width: '0%'}} animate={{width: '100%'}} transition={{duration: 1, delay: 3}}></motion.div>}
</article>
<article className="guide-item">
{inView1 && <motion.h3 className="guide-item-name" initial={{transform: 'translateX(-500px)', opacity: 0}} animate={{ opacity: 1}} transition={{duration: 2, delay: 0.8}}>Tom</motion.h3>}
{inView1 && <motion.p className="guide-item-description" initial={{transform: 'translateX(-500px)', opacity: 0}} animate={{opacity: 1}} transition={{duration: 2, delay: 0.6}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsum voluptas vitae adipisci omnis. Repudiandae ad similique deleniti ipsum perspiciatis!</motion.p>}
{inView1 && <motion.div className="guide-item-underline" initial={{width: '0%'}} animate={{width: '100%'}} transition={{duration: 1, delay: 3}}></motion.div>}
</article>
<article className="guide-item">
{inView1 && <motion.h3 className="guide-item-name" initial={{transform: 'translateX(-500px)', opacity: 0}} animate={{transform: 'translateX(0px)', opacity: 1}} transition={{duration: 2, delay: 0.8}}>Suzanne</motion.h3>}
{inView1 && <motion.p className="guide-item-description" initial={{transform: 'translateX(-500px)', opacity: 0}} animate={{transform: 'translateX(0px)', opacity: 1}} transition={{duration: 2, delay: 0.6}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsum voluptas vitae adipisci omnis. Repudiandae ad similique deleniti ipsum perspiciatis!</motion.p>}
{inView1 && <motion.div className="guide-item-underline" initial={{width: '0%'}} animate={{width: '100%'}} transition={{duration: .5, delay: 3}}></motion.div>}
</article>
{inView3 && <motion.div className="guides-button" initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 1, type: 'spring', stiffness: 260, damping: 20}}>And many more</motion.div>} */}

export default GuidesComponent;