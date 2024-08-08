import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
`;

const ResetButton = ({ onClick }) => {
  return <Button onClick={onClick}>Reset</Button>;
};

export default ResetButton;
