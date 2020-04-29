import styled from "styled-components";

export const container = styled.div`
  display: flex;
  width: 100%;
`;

export const locationContainer = styled.div`
  flex: 1;
  vertical-align: top;
  width: 78%;
  border: 1px solid #ddd;
  padding: 5px;
  border-radius: 5px;
`;

export const distanceContainer = styled.div`
  flex: 0 1;
`;

export const containerIcon = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 9%;
`;

export const containerLabel = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 15%;
`;

export const containerInput = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 75%;
`;

export const icon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url('${(props) => props.icon}');
  background-size: cover;
`;

export const label = styled.label`
  line-height: 24px;
  color: #ccc;
  font-weight: bold;
`;

export const input = styled.input`
  outline: none;
  border: none;
  height: 24px;
  padding-left: 5px;
  font-family: inherit;
  font-weight: bold;
  color: #555;
`;
