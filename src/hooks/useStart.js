import { useState, useContext, useCallback } from "react";
import PlayerContext from "../store/player-context";

const useStart = () => {
  const [bt1Active, setBt1Active] = useState(false);
  const [bt2Active, setBt2Active] = useState(false);

  const [counter, setCounter] = useState(3);
  const [showCounter, setShowCounter] = useState(false);

  const playerCtx = useContext(PlayerContext);
  const { startGame, choiceHandler } = playerCtx;

  const [start, setStart] = useState(false);
  const [myChoice,setMyChoice] = useState({});
  const [isDone, setIsDone] = useState(false);
 

  const startGameHandler = () => {
      setStart(true);
      
  }

  const choiceIsDone = () => {
          setIsDone(true);
          
  }

  const addChooseHandler = useCallback((player1,player2) => {
      setMyChoice(prev => {
          return {
              ...prev,
              player1,
              player2
          }
      })
  },[]);

  const chooseButtonHandler = (e) => {
    if (e.target.innerHTML === "X") {
      choiceHandler();
      setBt1Active(true);
      setBt2Active(false);
    }
    if (e.target.innerHTML === "O") {
      choiceHandler();
      setBt1Active(false);
      setBt2Active(true);
    }
  };

  const activeButtons = (btn) => {
    btn === "bt1" && setBt1Active(true);
    btn === "bt2" && setBt2Active(true);
  };

  const startHandler = () => {
    setShowCounter(true);
    setTimeout(() => {
      startGame();
    }, 3000);
  };

  return {
    bt1Active,
    bt2Active,
    counter,
    showCounter,
    setCounter,
    chooseButtonHandler,
    startHandler,
    activeButtons,
    start,
    myChoice,
    isDone,
    startGameHandler,
    choiceIsDone,
    addChooseHandler
  };
};

export default useStart;
