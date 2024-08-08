import React from "react";
import styled from "styled-components";

const SquareButton = styled.button`
  width: 100%;
  aspect-ratio: 1 / 1;
  font-size: 2.5rem;
  cursor: pointer;
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const Square = ({ value, onClick }) => {
  return <SquareButton onClick={onClick}>{value}</SquareButton>;
};

export default Square;
