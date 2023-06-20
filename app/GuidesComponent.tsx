import Image from 'next/image';
import blobanimation from '../public/blobanimation.svg'

const GuidesComponent: React.FC = () => {

    return (
        <div className="guides-container">
            <div className="guides-texts">
                <article className="guide-item">
                    <h3 className="guide-item-name">Marianne</h3>
                    <h4 className="guide-item-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsum voluptas vitae adipisci omnis. Repudiandae ad similique deleniti ipsum perspiciatis!</h4>
                </article>
                <article className="guide-item">
                    <h3 className="guide-item-name">Tom</h3>
                    <h4 className="guide-item-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsum voluptas vitae adipisci omnis. Repudiandae ad similique deleniti ipsum perspiciatis!</h4>
                </article>
                <article className="guide-item">
                    <h3 className="guide-item-name">Suzanne</h3>
                    <h4 className="guide-item-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsum voluptas vitae adipisci omnis. Repudiandae ad similique deleniti ipsum perspiciatis!</h4>
                </article>
            </div>
            <div className="guides-photos">
                <Image src={blobanimation} alt='animated blob' />
            </div>
        </div>
    )
}

export default GuidesComponent;