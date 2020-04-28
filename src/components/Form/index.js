import React from "react";
import * as S from "./styles";
import CheckBox from "./Checkbox";

const Form = () => {
  return (
    <S.container>
      <S.containerInputs>
        <S.containerCheck>
          <CheckBox title="Novos" />
          <CheckBox title="Usados" />
        </S.containerCheck>
      </S.containerInputs>
      <S.containerInputs></S.containerInputs>
    </S.container>
  );
};

export default Form;
