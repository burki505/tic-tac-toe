import React, { useEffect, useRef, useContext } from "react";
import GameContext from "../store/game-context";
import PlayerContext from "../store/player-context";

import "./Square.css";

const Square = ({ id, onDecideHandler }) => {
  const gameCtx = useContext(GameContext);
  const playerCtx = useContext(PlayerContext);

  const {
    settingPlayer,
    settingCount,
    count,
    player,
    setGameOver,
    gameOver,
    refresh,
  } = gameCtx;
  const {
    choices: { player1, player2 },
  } = playerCtx;

  const ref = useRef();

  const decisionHandler = () => {
    settingPlayer((prev) => !prev);
    onDecideHandler(id, !player ? player1 : player2);
    settingCount();
  };

  useEffect(() => {
    const item = ref.current;

    item.addEventListener("click", function () {
      this.innerHTML = !player ? player1 : player2;
    });

    return () => {
      item.removeEventListener("click", function () {
        this.innerHTML = !player ? player1 : player2;
      });
    };
  }, [player1, player2, player, gameOver]);

  useEffect(() => {
    console.log(refresh);
    if (refresh) {
      const item = ref.current;

      item.innerHTML = "";
    }
  }, [refresh]);

  useEffect(() => {
    count === 9 && setGameOver(true);
  }, [count, setGameOver]);

  return (
    <li
      key={id}
      ref={ref}
      onClick={decisionHandler}
      id={id}
      className="square"
    ></li>
  );
};

export default Square;
