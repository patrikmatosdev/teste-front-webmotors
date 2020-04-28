import styled from "styled-components";

export const container = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 30%;
`;

export const inputCheck = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 1px solid #ddd;
  cursor: pointer;

  &:hover,
  :active {
    border: 1px solid #dc143c;
  }
`;

export const label = styled.div`
  display: inline-block;
  vertical-align: top;
  line-height: 20px;
`;
