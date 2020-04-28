import React from "react";
import * as S from "./styles";

const CheckBox = (props) => {
  return (
    <S.container>
      <S.inputCheck type="checkbox" value="news" name="news" />
      <S.label for="news">{props.title}</S.label>
    </S.container>
  );
};

export default CheckBox;
