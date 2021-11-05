
import { useState } from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  const [player1Status, setPlayer1Status] = useState(false);
  const [player2Status, setPlayer2Status] = useState(false);
  const HandlePlayer1Status = (e) => {
    setPlayer1Status(!player1Status);
    //setPlayer2Status(player1Status);
    //setPlayer2Status(!player2Status);
    // console.log("player1", player1Status);
  }
  const HandlePlayer2Status = () => {
    setPlayer2Status(!player2Status);
    // setPlayer1Status(player2Status);
    //setPlayer2Status(!player2Status);
    // console.log("player2", player2Status);
  }
  return (
    <div className="App" >
      <div className="players"> <input onChange={HandlePlayer1Status} type="checkbox" name="player-1" />
        <label htmlFor="player-1">Player-1</label>
        <input onChange={HandlePlayer2Status} type="checkbox" name="player-2" />
        <label htmlFor="player-2">Player-2</label>
      </div>

      <Game player1Status={player1Status} player2Status={player2Status}></Game>
      {player2Status ? <p>Player-2 is now on Action(O)</p> : <p>Player-1 is now on Action(X)</p>}
    </div>

  );
}

export default App;
