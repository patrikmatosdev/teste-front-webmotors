import React from "react";
import * as S from "./styles";

const VehicleVersion = ({ version }) => {
  return (
    <S.container>
      <S.label>{version}</S.label>
    </S.container>
  );
};

export default VehicleVersion;
