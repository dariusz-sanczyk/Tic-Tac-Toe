import React from "react";
import Board from "./components/Board";
import ResetButton from "./components/ResetButton";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <>
      <GlobalStyles />
      <div>
        <h1>Tic-Tac-Toe</h1>
        <Board />
        {<h2>Winner: </h2>}
        {<h2>It's a draw!</h2>}
        <ResetButton onClick={handleReset} />
      </div>
    </>
  );
};

export default App;
