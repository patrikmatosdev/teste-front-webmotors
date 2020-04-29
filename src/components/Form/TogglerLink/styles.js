import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  color: #a33;

  &:hover,
  &:focus {
    color: #d33;
    span {
      border-color: #d33;
    }
  }
`;

export const Label = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding-left: 10px;
  font-size: 14px;
  font-weight: bold;
`;

export const Chevron = styled.span`
  display: inline-block;
  vertical-align: middle;
  border: 2px solid #a33;
  border-left: none;
  border-bottom: none;
  transition: 0.5s;
  transform: rotate(45deg);
  width: 4px;
  height: 4px;

  &:hover {
    transform: rotate(135deg);
  }
`;
