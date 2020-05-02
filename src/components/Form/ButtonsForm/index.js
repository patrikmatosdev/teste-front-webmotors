import React from "react";
import * as S from "./styles";

const ButtonsForm = ({ onClick }) => {
  return (
    <S.container>
      <S.Row>
        <S.col style={{ flex: "0 0 100px" }}>
          <S.link onClick={onClick}>Limpar Filtros</S.link>
        </S.col>
        <S.col>
          <S.buttonOffers>Obter Ofertas</S.buttonOffers>
        </S.col>
      </S.Row>
    </S.container>
  );
};

export default ButtonsForm;
