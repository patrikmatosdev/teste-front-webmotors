import styled from "styled-components";

export const container = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 250px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  margin: 15px;
  transition: 0.3s;

  &:hover {
    -webkit-box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);
  }
`;
