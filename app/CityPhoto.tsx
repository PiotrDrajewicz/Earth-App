
interface CityPhotoInterface {
    cityHover: string;
}

const CityPhoto: React.FC<CityPhotoInterface> = ({cityHover}) => {

    return (
        <img className={`city-photo ${cityHover ? 'show' : ''}`} src='https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="city photo" />
    )
}

export default CityPhoto;