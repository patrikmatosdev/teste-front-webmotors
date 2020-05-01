import styled from "styled-components";

export const container = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
`;

export const locationContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 78%;
  border: 1px solid #ddd;
  border-right: none;
  padding: 5px;
  border-radius: 5px 0 0 5px;
`;

export const distanceContainer = styled.div`
  flex: 0 1;
`;

export const containerIcon = styled.div`
  flex: 0 0 24px;
  width: 24px;
  vertical-align: middle;
`;

export const containerLabel = styled.div`
  flex: 0 1;
`;

export const containerInput = styled.div`
  flex: 1;
`;

export const icon = styled.div`
  width: 16px;
  height: 16px;
  background-image: url('${(props) => props.icon}');
  background-size: cover;
`;

export const label = styled.div`
  color: #999;
  font-size: 14px;
`;

export const input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  height: 24px;
  padding-left: 5px;
  font-family: inherit;
  font-weight: bold;
  color: #555;
`;
