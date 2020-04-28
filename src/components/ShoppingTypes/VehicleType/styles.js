import styled from "styled-components";

export const container = styled.div``;

export const containerIcon = styled.div`
  display: inline-block;
  vertical-align: bottom;
  width: 42%;
  padding: 0 10px 0 0;
`;

export const icon = styled.div`
  width: 42px;
  height: 42px;
  background-image: url('${(props) => props.icon}');
  background-size: cover;
  background-position: center;
  float: right;
`;

export const containerType = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 39%;
`;

export const containerLabel = styled.div``;

export const containerTitle = styled.div``;

export const label = styled.label`
  font-size: 12px;
  color: #bbb;
`;

export const title = styled.label`
  font-size: 22px;
  color: #dc143c;
`;
