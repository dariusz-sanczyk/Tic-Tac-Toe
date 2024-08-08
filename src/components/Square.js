import React from "react";
import styled from "styled-components";

const SquareButton = styled.button`
  width: 100px;
  height: 100px;
  font-size: 2rem;
  cursor: pointer;
`;

const Square = ({ value, onClick }) => {
  return <SquareButton onClick={onClick}>{value}</SquareButton>;
};

export default Square;
