import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  height: 150px;
`;

export const image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${(props) => props.image}');
  /* background-image: url("http://desafioonline.webmotors.com.br/content/img/02.jpg"); */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
