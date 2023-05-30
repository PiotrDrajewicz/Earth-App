
interface CityPhotoInterface {
    cityHover: string;
}

const CityPhoto: React.FC<CityPhotoInterface> = ({cityHover}) => {

    return (
        <>
            <img className={`city-photo1 ${cityHover ? 'show1' : ''}`} src='https://i.ibb.co/26Dt7bk/rome3-Cropped.jpg' alt="city photo 1" />
            <img className={`city-photo2 ${cityHover ? 'show2' : ''}`} src='https://i.ibb.co/QcqYJtH/rome2-Cropped.jpg' alt="city photo 2" />
            <img className={`city-photo3 ${cityHover ? 'show3' : ''}`} src='https://i.ibb.co/r4Nmvbv/rome-photo-Cropped.jpg' alt="city photo 3" />
        </>
        )
}

// https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1

export default CityPhoto;