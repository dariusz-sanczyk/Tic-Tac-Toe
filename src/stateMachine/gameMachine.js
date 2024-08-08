import { createMachine, assign } from "xstate";

const checkWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return board.includes(null) ? null : "draw";
};

const ticTacToeMachine = createMachine(
  {
    id: "ticTacToe",
    initial: "playing",
    context: {
      board: Array(9).fill(null),
      currentPlayer: "X",
      winner: null,
    },
    states: {
      playing: {
        on: {
          PLAY: {
            actions: "makeMove",
            target: "checkGameState",
          },
        },
      },
      checkGameState: {
        always: [
          { target: "won", guard: "isWin" },
          { target: "draw", guard: "isDraw" },
          { target: "playing", actions: "switchPlayer" },
        ],
      },
      won: {
        entry: "setWinner",
      },
      draw: {},
    },
    on: {
      RESET: { target: ".playing", actions: "resetGame" },
    },
  },
  {
    actions: {
      makeMove: assign((context) => {
        const newBoard = [...context.context.board];
        newBoard[context.event.index] = context.context.currentPlayer;
        return {
          board: newBoard,
        };
      }),
      switchPlayer: assign((context) => ({
        currentPlayer: context.context.currentPlayer === "X" ? "O" : "X",
      })),
      resetGame: assign(() => ({
        board: Array(9).fill(null),
        currentPlayer: "X",
        winner: null,
      })),
      setWinner: assign((context) => ({
        winner: context.context.currentPlayer,
      })),
    },
    guards: {
      isWin: (context) =>
        checkWinner(context.context.board) === context.context.currentPlayer,
      isDraw: (context) => checkWinner(context.context.board) === "draw",
    },
  }
);

export default ticTacToeMachine;
