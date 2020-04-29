import styled from "styled-components";

export const container = styled.button`
  display: flex;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const containerIcon = styled.div`
  display: flex;
  flex: 0 0 50px;
  align-self: center;
  justify-content: center;
`;

export const icon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url('${(props) => props.icon}');
  background-size: cover;
  background-position: center;
`;

export const containerType = styled.div`
  flex: 1;
  text-align: left;
`;

export const containerLabel = styled.div`
  flex: 1;
`;

export const containerTitle = styled.div`
  flex: 1;
`;

export const label = styled.span`
  font-size: 8px;
  color: #bbb;
`;

export const title = styled.span`
  font-size: 16px;
  color: #bbb;
`;
