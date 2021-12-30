import React, { useEffect, useRef, useContext } from "react";
import PlayerContext from "../store/player-context";
import { GsapFunctions } from "../gsap-functions";
import useStart from "../hooks/useStart";
import img from "../img/1.png";
import "./Starting.css";

const Starting = () => {
  const {
    chooseButtonHandler,
    startHandler,
    showCounter,
    setCounter,
    bt1Active,
    bt2Active,
    counter,
    activeButtons,
  } = useStart();

  const playerCtx = useContext(PlayerContext);
  const { isGameStarted, isChosen, addChoice } = playerCtx;

  const ref = useRef();
  const imgRef = useRef();
  const choiceRef = useRef();
  const headerRef = useRef();
  const footerRef = useRef();

  useEffect(() => {
    GsapFunctions(
      imgRef.current,
      { x: -1500, delay: 4, duration: 1.5 },
      "from"
    );
    GsapFunctions(
      choiceRef.current,
      { x: 1500, delay: 4, duration: 1.5 },
      "from"
    );
    GsapFunctions(
      headerRef.current,
      { opacity: 0, delay: 4, duration: 1.5 },
      "from"
    );
    GsapFunctions(
      footerRef.current,
      { y: -500, delay: 4, duration: 1.5 },
      "from"
    );
  }, []);

  useEffect(() => {
    isGameStarted && GsapFunctions(ref.current, { opacity: 0 });
  }, [isGameStarted]);

  useEffect(() => {
    let timer;
    if (showCounter) {
      timer = setTimeout(() => {
        setCounter((prev) => prev - 1);
      }, [1000]);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [counter, showCounter, setCounter]);

  useEffect(() => {
    isGameStarted && setCounter(0);
  }, [isGameStarted, setCounter]);

  useEffect(() => {
    if (bt1Active) {
      let player1 = "X";
      let player2 = "O";
      addChoice(player1, player2);
    } else if (bt2Active) {
      let player1 = "O";
      let player2 = "X";
      addChoice(player1, player2);
    }
  }, [bt1Active, bt2Active, addChoice]);

  return (
    <div className="starting" ref={ref}>
      <h1 ref={headerRef}>Welcome To The Tic Tac Toe</h1>
      <div className="container">
        <img ref={imgRef} src={img} alt="" />
        <div ref={choiceRef} className="choice">
          <h3>Player 1 Make Your Choice</h3>
          <div className="buttons">
            <button
              className={bt1Active ? "active" : ""}
              onFocus={() => activeButtons("bt1")}
              onClick={chooseButtonHandler}
              disabled={bt2Active}
            >
              X
            </button>
            <button
              className={bt2Active ? "active" : ""}
              type="button"
              onClick={chooseButtonHandler}
              onFocus={() => activeButtons("bt2")}
              disabled={bt1Active}
            >
              O
            </button>
          </div>
          {isChosen && (
            <button onClick={startHandler} className="start">
              START GAME
            </button>
          )}
        </div>
      </div>
      {showCounter && <div className="timer">{counter}</div>}
      <footer className="footer" ref={footerRef}>
        All Rights Reserved &copy;
      </footer>
    </div>
  );
};

export default Starting;
