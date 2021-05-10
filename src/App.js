
import './App.css';
import './Button.css';
import dog from './heropics/DogGunfire.PNG'
import cat from './heropics/CatGunfire.PNG'
import bird from './heropics/BirdGunfire.PNG'
import tiger from './heropics/TigerGunfire.PNG'
import gunfire from './heropics/GunfireLogo.PNG'
import Loader from "react-loader-spinner";
import React, { useState } from 'react';

function App() {
  const[characters] = useState([{name: 'Crown Prince', picture: cat}, {name: 'Ao Bai', picture: dog}, {name: 'Qing Yan', picture: bird}, {name: 'Lei Luo', picture: tiger}])
  const[randChar, setRandChar] = useState(Math.floor(Math.random() * (3 - 0 + 1)) + 0)
  const [loading,setLoading] = useState(true)
  const[again, setAgain] = useState(1)

  function randomInteger(min, max) {
    setLoading(true)
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (num === randChar) {
      setAgain(again + 1)
      setLoading(false)
    }
    else{
      setAgain(1)
    }
    return num
  }

  const handleImageLoaded = () => {
    setLoading(false)
  }


  return (
    <div >
      <div className="App" >
        <img src={gunfire} alt="logo" height={600} width={1200}></img>
        <div class="flex-container" style={{flexDirection:'column', justifyContent:'center'}}> 
            <header style={{color:'white', fontSize:'40px'}}>{characters[randChar].name + ' ' + (again>1?('x' + again):'')}</header>
            <Loader z-index="-1" type="Puff" color="#00BFFF" height={100} width={100} visible={loading} />
            <img onLoad={handleImageLoaded} src={characters[randChar].picture} alt={characters[randChar].name} height={500} width={500}></img>       
            <div>
              <button className="button" onClick={()=> setRandChar(randomInteger(0,3))}> Randomise Character</button>
            </div>            
        </div>
      </div>
    </div>
  );
}

export default App;
