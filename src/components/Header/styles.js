import styled from "styled-components";
import logoImage from "../../assets/img/logo.png";

export const container = styled.div`
  padding-bottom: 20px;
`;

export const containerLogo = styled.div`
  height: 35px;
  width: 200px;
`;

export const logo = styled.div`
  background-image: url('${logoImage}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;

`;
