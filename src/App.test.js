import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("TicTacToe App", () => {
  test("renders Tic-Tac-Toe board and controls", () => {
    render(<App />);
    expect(screen.getByText("Tic-Tac-Toe")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(9);
    expect(screen.getByText("Reset")).toBeInTheDocument();
  });

  test("allows players to make moves", () => {
    render(<App />);
    const cells = screen.getAllByRole("button");

    fireEvent.click(cells[0]);
    expect(cells[0]).toHaveTextContent("X");

    fireEvent.click(cells[1]);
    expect(cells[1]).toHaveTextContent("O");
  });

  test("detects a win", () => {
    render(<App />);
    const cells = screen.getAllByRole("button");

    fireEvent.click(cells[0]); // X
    fireEvent.click(cells[3]); // O
    fireEvent.click(cells[1]); // X
    fireEvent.click(cells[4]); // O
    fireEvent.click(cells[2]); // X

    expect(screen.getByText("Winner: X")).toBeInTheDocument();
  });

  test("detects a draw", () => {
    render(<App />);
    const cells = screen.getAllByRole("button");

    fireEvent.click(cells[0]); // X
    fireEvent.click(cells[1]); // O
    fireEvent.click(cells[2]); // X
    fireEvent.click(cells[4]); // O
    fireEvent.click(cells[3]); // X
    fireEvent.click(cells[5]); // O
    fireEvent.click(cells[7]); // X
    fireEvent.click(cells[6]); // O
    fireEvent.click(cells[8]); // X

    expect(screen.getByText("It's a draw!")).toBeInTheDocument();
  });

  test("resets the game", () => {
    render(<App />);
    const cells = screen.getAllByRole("button");

    fireEvent.click(cells[0]); // X
    fireEvent.click(screen.getByText("Reset"));

    cells.forEach((cell) => {
      expect(cell).toHaveTextContent("");
    });
  });
});
