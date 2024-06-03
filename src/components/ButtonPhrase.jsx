import getRandomNumber from "../utils/getRandomNumber";
import quotes from "../data/phrases.json";
import photos from '../data/photos.json';

// eslint-disable-next-line react/prop-types
const ButtonPhrase = ({selectedPhrase, setSelectedPhrase, setBgSelected, BgSelected }) => {
  const ChangePhrase = () => {
    let indexRandom = getRandomNumber(quotes.length);
    let indexPhotos = getRandomNumber(photos.length);

    while(quotes[indexRandom] === selectedPhrase){
        indexRandom = getRandomNumber(quotes.length)
    }

    while(photos[indexPhotos] === BgSelected){
        indexPhotos = getRandomNumber(photos.length)
    }

    setSelectedPhrase(quotes[indexRandom]);
    setBgSelected(photos[indexPhotos]);

  };

  return <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105" onClick={ChangePhrase}>See another</button>;
};

export default ButtonPhrase;
