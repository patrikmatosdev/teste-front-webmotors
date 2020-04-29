import React from "react";
import * as S from "./styles";

const TogglerLink = ({ children }) => {
  return (
    <S.Container>
      <S.Chevron />
      <S.Label>{children}</S.Label>
    </S.Container>
  );
};

export default TogglerLink;
