
import './App.css';
import './Button.css';
import dog from './heropics/DogGunfire.PNG'
import cat from './heropics/CatGunfire.PNG'
import bird from './heropics/BirdGunfire.PNG'
import tiger from './heropics/TigerGunfire.PNG'
import gunfire from './heropics/GunfireLogo.PNG'
import React, { useState } from 'react';

function App() {
  const[characters] = useState([{name: 'Crown Prince', picture: cat}, {name: 'Ao Bai', picture: dog}, {name: 'Qing Yan', picture: bird}, {name: 'Lei Luo', picture: tiger}])
  const[randChar, setRandChar] = useState(Math.floor(Math.random() * (3 - 0 + 1)) + 0)
  const[again, setAgain] = useState(1)

  function randomInteger(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (num === randChar) {
      setAgain(again + 1)
    }
    else{
      setAgain(1)
    }
    return num
  }


  return (
    <div className="App">
      <img src={gunfire} alt="logo" height={200} width={400}></img>
      <div class="flex-container" style={{flexDirection:'column', justifyContent:'center'}}> 
          <header style={{color:'white'}}>{characters[randChar].name + ' ' + (again>1?('x' + again):'')}</header>
          <img src={characters[randChar].picture} alt={characters[randChar].name} height={200} width={200}></img>
          <div>
            <button className="button" onClick={()=> setRandChar(randomInteger(0,3))}> Randomise Character</button>
          </div>   
          
      </div>
    </div>
  );
}

export default App;
