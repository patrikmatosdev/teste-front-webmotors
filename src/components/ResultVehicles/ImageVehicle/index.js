import React from "react";
import * as S from "./styles";

const ImageVehicle = ({ image }) => {
  return (
    <S.container>
      <S.image image={image} />
    </S.container>
  );
};

export default ImageVehicle;
