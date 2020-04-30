import React from "react";
import * as S from "./styles";

const VehicleButton = (props) => {
  return (
    <S.container
      onClick={props.onClick}
      isActive={props.isActive}
      className="container"
    >
      <S.containerIcon className="containerIcon">
        <S.icon className="iconVehicle" icon={props.icon} />
      </S.containerIcon>
      <S.containerType className="containerType">
        <S.containerLabel className="containterLabel">
          <S.label className="label">{props.type}</S.label>
        </S.containerLabel>
        <S.containerTitle className="containerTitle">
          <S.title className="title">{props.title}</S.title>
        </S.containerTitle>
      </S.containerType>
    </S.container>
  );
};

export default VehicleButton;
