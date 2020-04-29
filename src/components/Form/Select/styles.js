import styled from "styled-components";
import iconImage from "../../../assets/img/downArrow.png";

export const container = styled.div`
  display: flex;
  border: 1px solid #ddd;
  padding: 8px 5px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border: 1px solid #aaa;
  }
`;

export const containerLabel = styled.div`
  flex: 0 1;
`;

export const containerValue = styled.div`
  flex: 1;
  padding: 0 7px;
`;

export const containerIcon = styled.div`
  flex: 0 0 10px;
  width: 10px;
  align-self: center;
`;

export const icon = styled.div`
  width: 7px;
  height: 7px;
  background-image: url('${iconImage}');
  background-size: contain;
`;

export const label = styled.div`
  color: #999;
  font-size: 14px;
`;

export const value = styled.div`
  color: #555;
  font-weight: bold;
  font-size: 14px;
`;
