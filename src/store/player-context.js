import React from "react";
import useStart from "../hooks/useStart";

const PlayerContext = React.createContext({
  choices: {},
  startGame: () => {},
  choiceHandler: () => {},
  isGameStarted: false,
  isChosen: false,
  isLoading: false,
  setLoader: () => {},
});

export const ContextProvider = (props) => {
  const {
    myChoice,
    addChooseHandler,
    startGameHandler,
    choiceIsDone,
    start,
    isDone,
  } = useStart();

  return (
    <PlayerContext.Provider
      value={{
        choices: myChoice,
        addChoice: addChooseHandler,
        startGame: startGameHandler,
        choiceHandler: choiceIsDone,
        isGameStarted: start,
        isChosen: isDone,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;
