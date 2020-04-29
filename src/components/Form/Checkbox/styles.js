import styled from "styled-components";

export const container = styled.button`
  display: inline-block;
  vertical-align: top;
  padding-right: 30px;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;

  ${(props) => {
    let subclass = "&:hover";
    if (props.checked) subclass = "&";

    return `
      ${subclass} {
        div {
          color: #dc143c !important;
          border-color: #dc143c !important;
        }
      }
    `;
  }}
`;

export const inputCheck = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: 0.3s;
`;

export const checkMark = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  margin-top: -5px;
  border-radius: 2px;
  background: #dc143c;
`;

export const label = styled.div`
  display: inline-block;
  vertical-align: middle;
  line-height: 16px;
  transition: 0.3s;
  font-size: 14px;
  color: #666;
`;
