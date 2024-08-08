import React from "react";
import { useMachine } from "@xstate/react";
import gameMachine from "./stateMachine/gameMachine";
import Board from "./components/Board";
import ResetButton from "./components/ResetButton";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  const [state, send] = useMachine(gameMachine);

  const handleCellClick = (index) => {
    if (
      state.context.board[index] ||
      state.matches("won") ||
      state.matches("draw")
    )
      return;
    send({ type: "PLAY", index });
  };

  const handleReset = () => {
    send({ type: "RESET" });
  };

  return (
    <>
      <GlobalStyles />
      <div>
        <h1>Tic-Tac-Toe</h1>
        <Board board={state.context.board} onCellClick={handleCellClick} />
        {state.matches("won") && <h2>Winner: {state.context.currentPlayer}</h2>}
        {state.matches("draw") && <h2>It's a draw!</h2>}
        <ResetButton onClick={handleReset} />
      </div>
    </>
  );
};

export default App;
