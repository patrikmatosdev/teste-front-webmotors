import React from "react";
import * as S from "./styles";

const TitleVehicle = (props) => {
  return (
    <S.container>
      <S.title>
        {props.title} - {props.model}
      </S.title>
    </S.container>
  );
};

export default TitleVehicle;
