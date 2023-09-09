import { useState } from 'react';
import Start_game from './components/Start_game';
import GamePlay from './components/GamePlay';

function App() {
  const [isGmaeStarted,setIsGameStarted]=useState(false);

  const toggleGameplay=() =>{
    setIsGameStarted((prev)=>!prev);
  };

  return(
      <> {isGmaeStarted ? <GamePlay /> : <Start_game toggle={toggleGameplay} />} </>
    
  );
};

export default App;
