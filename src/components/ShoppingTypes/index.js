import React from "react";
import * as S from "./styles";
import VehicleType from "./VehicleType/index";
import Car from "../../assets/img/car.png";
import Motorcycle from "../../assets/img/motorcycle.png";
import ButtonSell from "./ButtonSell";

const ShoppingTypes = () => {
  return (
    <S.container>
      <S.containerType>
        <VehicleType icon={Car} title="CARROS" type="COMPRAR" />
      </S.containerType>
      <S.containerType>
        <VehicleType icon={Motorcycle} title="MOTOS" type="COMPRAR" />
      </S.containerType>
      <S.containerButton>
        <ButtonSell />
      </S.containerButton>
    </S.container>
  );
};

export default ShoppingTypes;
