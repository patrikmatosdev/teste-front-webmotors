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
        border-bottom: 2px solid #a33;
        
        .title {
          color: #b33 !important;
        },
        
        
      }
    `;
  }};
`;

export const containerIcon = styled.div`
  display: flex;
  flex: 0 0 50px;
  align-self: center;
  justify-content: center;
`;

export const icon = styled.div`
  width: 32px;
  height: 32px;
  background-image: url('${(props) => props.icon}');
  background-size: cover;
  background-position: center;
`;

export const containerType = styled.div`
  text-align: left;
`;

export const containerLabel = styled.div``;

export const containerTitle = styled.div``;

export const label = styled.span`
  font-size: 10px;
  color: #ccc;
`;

export const title = styled.span`
  font-size: 18px;
  color: #bbb;
  font-weight: bold;
`;
