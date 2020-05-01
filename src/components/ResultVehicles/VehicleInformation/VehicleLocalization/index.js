import React from "react";
import * as S from "./styles";

const VehicleLocalization = ({ localization }) => {
  return (
    <S.container>
      <S.containerIcon>
        <S.icon />
      </S.containerIcon>
      <S.containerLabel>
        <S.label>São Paulo-SP</S.label>
      </S.containerLabel>
    </S.container>
  );
};

export default VehicleLocalization;
