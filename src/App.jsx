/* eslint-disable no-unused-vars */
import { useState } from "react";
import photos from "./data/photos.json";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
import quotes from "./data/phrases.json";
import getRandomNumber from "./utils/getRandomNumber";
import ButtonPhrase from "./components/ButtonPhrase";
import CookieTextBox from "./components/CookieTextBox";
import './components/styles/custom.css'

function App() {
  const indexRandom = getRandomNumber(quotes.length);

  const [selectedPhrase, setSelectedPhrase] = useState(quotes[indexRandom]);
  const [BgSelected, setBgSelected] = useState(
    photos[getRandomNumber(photos.length)]
  );

  const ObjStyle = {
    backgroundImage: `url(/images/fondo${BgSelected}.jpg)`,
    
};

  return (
    <>
      <div className="transition-bg min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-no-repeat bg-center bg-fixed" style={ObjStyle}>
        <h1 className="text-5xl font-bold absolute top-20">Galleta de la fortuna</h1>
        <div className="xl:bg-[length:82%_82%] bg-[length:70%_70%]" style={{ backgroundImage: 'url(\'src/assets/rectangle1.svg\')', backgroundClip:"padding-box", backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>

        <article className=" sms:p-40 sm:p-24 md:p-52 lg:p-52 xl:p-52 p-32 relative top-3 z-10 text-blue-500">
          <CookieTextBox SelectedPhrase={selectedPhrase} style={{color: "#fff"}} />

        </article>
        </div>
          <ButtonPhrase 
            setSelectedPhrase={setSelectedPhrase}
            setBgSelected={setBgSelected}
            selectedPhrase={selectedPhrase}
            BgSelected={BgSelected}
          />
      </div>
    </>
  );
}

export default App;
