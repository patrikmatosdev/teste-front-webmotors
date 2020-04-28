import styled from "styled-components";

export const container = styled.div``;

export const containerType = styled.div`
  width: 18%;
  display: inline-block;
  vertical-align: top;
  border-bottom: 2px solid #c4c4c4;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #dc143c;
  }
`;

export const containerButton = styled.div`
  display: inline-block;
  vertical-align: bottom;
  width: 64%;
`;
