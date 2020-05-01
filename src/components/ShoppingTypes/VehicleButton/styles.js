import styled from "styled-components";

export const container = styled.button`
  display: flex;
  flex: 1;
  background: none;
  border: none;
  border-bottom: 2px solid #ddd;
  outline: none;
  cursor: pointer;
  transition: 0.3s;

  ${(props) => {
    let subclass = "&:hover, &:focus";
    if (props.isActive === true) subclass = "&";
    return `
      ${subclass} {
        border-bottom: 2px solid #b80000;
        
        .title {
          color: #b80000 !important;
        },
      }
    `;
  }};
`;

export const containerIcon = styled.div`
  display: flex;
  flex: 0 0 60px;
  justify-content: center;
  align-self: flex-end;
`;

export const icon = styled.div`
  width: 32px;
  height: 32px;
  background-image: url('${(props) => props.icon}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const containerType = styled.div`
  text-align: left;
`;

export const containerLabel = styled.div``;

export const containerTitle = styled.div``;

export const label = styled.span`
  font-size: 10px;
  color: #999;
`;

export const title = styled.span`
  font-size: 18px;
  color: #999;
  font-weight: 500;
`;
