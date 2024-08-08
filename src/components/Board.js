import React from "react";
import styled from "styled-components";
import Square from "./Square";

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 10px;
  background-color: #ddd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Board = ({ board, onCellClick }) => {
  return (
    <BoardContainer>
      {board.map((value, index) => (
        <Square key={index} value={value} onClick={() => onCellClick(index)} />
      ))}
    </BoardContainer>
  );
};

export default Board;
