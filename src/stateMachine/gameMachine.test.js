import { interpret } from "xstate";
import gameMachine from "./gameMachine";

describe("game State Machine", () => {
  let service;

  beforeEach(() => {
    service = interpret(gameMachine).start();
  });

  test('initial state should be "playing"', () => {
    expect(service.state.value).toBe("playing");
    expect(service.state.context.board).toEqual(Array(9).fill(null));
    expect(service.state.context.currentPlayer).toBe("X");
  });

  test("should allow a move and switch player", () => {
    service.send({ type: "PLAY", index: 0 });
    expect(service.state.context.board[0]).toBe("X");
    expect(service.state.context.currentPlayer).toBe("O");
  });

  test("should detect a win", () => {
    service.send({ type: "PLAY", index: 0 }); // X
    service.send({ type: "PLAY", index: 3 }); // O
    service.send({ type: "PLAY", index: 1 }); // X
    service.send({ type: "PLAY", index: 4 }); // O
    service.send({ type: "PLAY", index: 2 }); // X

    expect(service.state.value).toBe("won");
    expect(service.state.context.winner).toBe("X");
  });

  test("should detect a draw", () => {
    service.send({ type: "PLAY", index: 0 }); // X
    service.send({ type: "PLAY", index: 1 }); // O
    service.send({ type: "PLAY", index: 2 }); // X
    service.send({ type: "PLAY", index: 4 }); // O
    service.send({ type: "PLAY", index: 3 }); // X
    service.send({ type: "PLAY", index: 5 }); // O
    service.send({ type: "PLAY", index: 7 }); // X
    service.send({ type: "PLAY", index: 6 }); // O
    service.send({ type: "PLAY", index: 8 }); // X

    expect(service.state.value).toBe("draw");
  });

  test("should reset the game", () => {
    service.send({ type: "PLAY", index: 0 });
    service.send({ type: "RESET" });

    expect(service.state.value).toBe("playing");
    expect(service.state.context.board).toEqual(Array(9).fill(null));
    expect(service.state.context.currentPlayer).toBe("X");
  });
});
