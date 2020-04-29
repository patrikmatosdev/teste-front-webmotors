import React from "react";
import * as S from "./styles";

const Select = () => {
  return (
    <S.container>
      <S.containerLabel>
        <S.label>Marca: </S.label>
      </S.containerLabel>
      <S.containerValue>
        <S.value>Todas</S.value>
      </S.containerValue>
      <S.containerIcon>
        <S.icon />
      </S.containerIcon>
    </S.container>
  );
};

export default Select;
