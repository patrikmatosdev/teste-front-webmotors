import styled from "styled-components";
import iconImage from "../../../assets/img/downArrow.png";

export const container = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 5px;
  position: relative;
  background: white;

  &:hover {
    border: 1px solid #aaa;
  }
`;

export const containerOptions = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid #ddd;
  z-index: 20;
  max-height: 200px;
  overflow-y: auto;

  ${(props) => {
    if (props.visible) {
      return `
        display: block;
      `;
    }

    return ``;
  }}
`;

export const containerLabel = styled.div`
  flex: 0 1;
`;

export const containerPlaceholder = styled.div`
  flex: 1;
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

export const clickable = styled.button`
  display: flex;
  flex: 1;
  padding: 8px 5px;
  background: none;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
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

export const option = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 14px;
  text-align: left;
  color: #666;
  background: none;
  border: none;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #eee;
  }
`;
