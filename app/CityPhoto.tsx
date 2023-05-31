import { ReactElement, useState, useEffect } from "react";

interface CityPhotoInterface {
    cityHover: string;
}

const CityPhoto: React.FC<CityPhotoInterface> = ({cityHover})  => {
    const [isCityOpen, setIsCityOpen] = useState(false);
    const [openedCity, setOpenedCity] = useState('');

    const photosLibrary = {
        'Rome': ['https://i.ibb.co/26Dt7bk/rome3-Cropped.jpg', 'https://i.ibb.co/QcqYJtH/rome2-Cropped.jpg', 'https://i.ibb.co/r4Nmvbv/rome-photo-Cropped.jpg'],
        'Cracow': [],
        'Cairo': []
    }

    useEffect(() => {
        if (cityHover) {
            setIsCityOpen(true);
            setOpenedCity(cityHover);
        }
    }, [cityHover])

    return (
        <>
            <img className={`city-photo1 ${cityHover ? 'show1' : ''}`} alt="city photo 1" src={ 
                isCityOpen && openedCity === 'Rome' ? `${photosLibrary.Rome[0]}` :
                isCityOpen && openedCity === 'Cracow' ? `${photosLibrary.Rome[2]}` :
                '' } />
            
            
            
            
            <img className={`city-photo2 ${cityHover ? 'show2' : ''}`} src='https://i.ibb.co/QcqYJtH/rome2-Cropped.jpg' alt="city photo 2" />
            <img className={`city-photo3 ${cityHover ? 'show3' : ''}`} src='https://i.ibb.co/r4Nmvbv/rome-photo-Cropped.jpg' alt="city photo 3" />
        </>
    ) 
    }
    // <img className={`city-photo1 ${cityHover ? 'show1' : ''}`} alt="city photo 1" src={
    //     if (cityHover === 'Rome') {`${photosLibrary.Rome[0]}`}
    //     else if (cityHover === 'Cracow') {`${photosLibrary.Cracow[0]}`}
    //     } />


    // <img className={`city-photo2 ${cityHover ? 'show2' : ''}`} src='https://i.ibb.co/QcqYJtH/rome2-Cropped.jpg' alt="city photo 2" />
    // <img className={`city-photo3 ${cityHover ? 'show3' : ''}`} src='https://i.ibb.co/r4Nmvbv/rome-photo-Cropped.jpg' alt="city photo 3" />

// https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1

export default CityPhoto;