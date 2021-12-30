import React, { useContext, useEffect } from "react";
import PlayerContext from "../store/player-context";
import GameContext from "../store/game-context";
import Square from "./Square";
import squares from "../squares";
import bull from "../img/bull.png";
import "./Board.css";


const Board = () => {
  const playerCtx = useContext(PlayerContext);
  const gameCtx = useContext(GameContext);

  const { choices } = playerCtx;
  const { addDecision, gameOver, player, winGameHandler, winner, isDraw, refreshBoard } =
    gameCtx;

  const onDecideHandler = (id, decision) => {
    const newSquares = squares.find((square) => square.id === id);

    if (newSquares) {
      addDecision(id, decision);
    }
  };

  const refresh = () => {
    refreshBoard();
  };

  const mainLoad = () => {
    document.location.reload();
  }

  useEffect(() => {
    winGameHandler();
  }, [winGameHandler, gameOver]);

  return (
    <>
      <div className="board-container">
        <div className="players">
          {winner === "player1" && gameOver && (
            <h1 className={gameOver ? "flash" : ""}>Player 1 Won</h1>
          )}
          {winner === "player2" && gameOver && <h1 className={gameOver ? "flash" : ""}>Player 2 Won</h1>}
          {isDraw && <h1>Game is Draw</h1>}
          {!gameOver && (
            <>
              {" "}
              <h1>{!player ? "Player 1:" : "Player 2:"}</h1>
              <span>{!player ? choices.player1 : choices.player2}</span>
            </>
          )}
        </div>

        <ul className={`board ${gameOver ? "disable" : ""}`}>
          {squares.map((square) => (
            <Square
              onDecideHandler={onDecideHandler}
              key={square.id}
              id={square.id}
            />
          ))}
        </ul>
        <div className="button-groups">
          <button onClick={refresh}>Restart The Game</button>
          <button onClick={mainLoad}>Back To Main Menu</button>
        </div>
      </div>

      <div className="logo">
        <img src={bull} alt="" />
      </div>
    </>
  );
};

export default Board;
