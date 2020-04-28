import styled from "styled-components";
import logoImage from "../../assets/img/logo.png";

export const container = styled.div`
  margin-bottom: 50px;
`;

export const containerLogo = styled.div`
  height: 50px;
  width: 270px;
`;

export const logo = styled.div`
  background-image: url('${logoImage}');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;
