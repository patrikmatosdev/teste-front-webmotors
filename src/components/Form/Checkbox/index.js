import React from "react";
import * as S from "./styles";

const CheckBox = ({ title, checked }) => {
  return (
    <S.container checked={checked}>
      <S.inputCheck>{checked && <S.checkMark />}</S.inputCheck>
      <S.label for="news">{title}</S.label>
    </S.container>
  );
};

export default CheckBox;
