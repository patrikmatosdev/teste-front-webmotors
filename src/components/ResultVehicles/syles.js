import styled from "styled-components";

export const container = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  margin: 15px 0;
  transition: 0.3s;
  border: 1px solid #ccc;
  text-align: left;
  box-shadow: 1px 1px 2px #ccc;

  &:hover {
    box-shadow: 0 0 6px #bbb;
  }
`;
