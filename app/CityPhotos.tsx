import { ReactElement, useState, useEffect } from "react";
import photosUrls from './photosUrls.json';

interface CityPhotoInterface {
    cityHover: string;
}

const CityPhotos: React.FC<CityPhotoInterface> = ({cityHover})  => {
    const [isCityOpen, setIsCityOpen] = useState<boolean>(false);
    const [openedCity, setOpenedCity] = useState<string>('');


    useEffect(() => {
        if (cityHover) {
            setIsCityOpen(true);
            setOpenedCity(cityHover);
        }
    }, [cityHover])

    return (
        <>
            <h2 className={`city-name ${cityHover ? 'show-name' : ''}`}>Cracowwwwwww</h2>
            <div className="city-photos-container">
                <img className={`city-photo-item city-photo1 ${cityHover ? 'show1' : ''}`} alt="city photo 1" src={ 
                    isCityOpen && openedCity === 'Rome' ? `${photosUrls.Rome[0]}` :
                    isCityOpen && openedCity === 'Cracow' ? `${photosUrls.Cracow[0]}` :
                    '' } 
                />  
                <img className={`city-photo-item city-photo2 ${cityHover ? 'show2' : ''}`} alt="city photo 2" src={ 
                    isCityOpen && openedCity === 'Rome' ? `${photosUrls.Rome[1]}` :
                    isCityOpen && openedCity === 'Cracow' ? `${photosUrls.Cracow[1]}` :
                    '' } 
                />
                <img className={`city-photo-item city-photo3 ${cityHover ? 'show3' : ''}`} alt="city photo 3" src={ 
                    isCityOpen && openedCity === 'Rome' ? `${photosUrls.Rome[2]}` :
                    isCityOpen && openedCity === 'Cracow' ? `${photosUrls.Cracow[2]}` :
                    '' } 
                />
            </div>
        </>
    ) 
    }
    

export default CityPhotos;