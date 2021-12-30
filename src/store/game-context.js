import react, { useCallback, useState, useContext } from "react";
import PlayerContext from "./player-context";
import { GameWinner } from "../game-winner";

const GameContext = react.createContext({
  decisions: [],
  next: false,
  player: true,
  count: 0,
  settingCount: () => {},
  settingPlayer: () => {},
  addDecision: (index, decision) => {},
  settingNext: () => {},
  gameOver: false,
  gameOverHandler: () => {},
  winGameHandler: () => {},
  winner: "",
  isDraw: false,
});

export const GameContextProvider = (props) => {
  const [allDecisions, setAllDecisions] = useState([
    { index: 0, decision: "" },
    { index: 1, decision: "" },
    { index: 2, decision: "" },
    { index: 3, decision: "" },
    { index: 4, decision: "" },
    { index: 5, decision: "" },
    { index: 6, decision: "" },
    { index: 7, decision: "" },
    { index: 8, decision: "" },
  ]);
  const [player, setPlayer] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [counter, setCounter] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState("");
  const [draw, setDraw] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const playerCtx = useContext(PlayerContext);
  const { player1, player2 } = playerCtx.choices;

  const addDecisionHandler = (index, decision) => {
    setAllDecisions((prev) => {
      let updatedArray = [...prev];

      let itemIndex = updatedArray.findIndex((i) => i.index === index);
      updatedArray[itemIndex].decision = decision;
      return [...updatedArray];
    });
  };

  const countHandler = () => {
    setCounter((prev) => prev + 1);
  };

  const refreshBoard = () => {
    setAllDecisions(prev => {
      let newDecisions = [];
      let updateDecisions = [...prev];
      for(let item of updateDecisions){
        item.decision = "";
      }
      newDecisions = [...updateDecisions];
      console.log(newDecisions);
      return [
        ...newDecisions
      ]
    });

    setRefresh(true);
    setPlayer(false);
    setIsGameOver(false);
  }

  const winGameHandler = useCallback(() => {
    let x = GameWinner(allDecisions);
    console.log(x);

    if (x === player1) {
      setWinner("player1");
      setIsGameOver(true);
    } else if (x === player2) {
      setWinner("player2");
      setIsGameOver(true);
    }

    if (x === null && counter === 9) {
      setDraw(true);
      setIsGameOver(true);
    }
  }, [allDecisions, counter, player1, player2]);

  return (
    <GameContext.Provider
      value={{
        addDecision: addDecisionHandler,
        decisions: allDecisions,
        player: player,
        settingPlayer: setPlayer,
        next: isNext,
        settingNext: setIsNext,
        count: counter,
        settingCount: countHandler,
        gameOver: isGameOver,
        setGameOver: setIsGameOver,
        winGameHandler: winGameHandler,
        winner: winner,
        isDraw: draw,
        refreshBoard,
        refresh
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContext;
