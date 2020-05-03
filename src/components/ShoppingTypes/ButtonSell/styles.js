import styled from "styled-components";

export const container = styled.div``;

export const Button = styled.button`
  float: right;
  color: #ff8c00;
  border: 2px solid #ff8c00;
  font-size: 1em;
  padding: 10px 30px;
  font-weight: bold;
  border-radius: 3px;
  outline: none;
  background: #e4e4e4;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #ff8c00;
    color: #ffffff;
  }

  @media (max-width: 515px) {
    display: none;
  }
`;
