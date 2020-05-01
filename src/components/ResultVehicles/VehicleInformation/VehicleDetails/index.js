import React from "react";
import * as S from "./styles";

const VehicleYears = ({ yearFab, yearModel, kilometers }) => {
  return (
    <S.container>
      <S.containerYears>
        <S.label>
          {yearFab}/{yearModel}
        </S.label>
      </S.containerYears>
      <S.containerKilometers>
        <S.label>{kilometers} km</S.label>
      </S.containerKilometers>
    </S.container>
  );
};

export default VehicleYears;
