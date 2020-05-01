import React from "react";
import * as S from "./styles";

const BoxVehicle = ({ children, style }) => {
  return (
    <S.container style={style} className="containerBox">
      {children}
    </S.container>
  );
};

export default BoxVehicle;
