import { useContext } from "react";
import Board from "./components/Board";
import PlayerContext from "./store/player-context";
import "./App.css";
import Modal from "./components/Modal";
import Starting from "./components/Starting";

function App() {
  const playerCtx = useContext(PlayerContext);
  const { isGameStarted } = playerCtx;

  return (
    <>
      <Modal />

      <div className="App">
        <Starting />
        {isGameStarted && <Board />}
      </div>
    </>
  );
}

export default App;
