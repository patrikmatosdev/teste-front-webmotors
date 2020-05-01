import React from "react";
import * as S from "./styles";
import VehicleTitle from "./VehicleTitle";
import VehicleModel from "./VehicleModel";
import VehiclePrice from "./VehiclePrice";
import VehicleDetails from "./VehicleDetails/index";
import VehicleLocalization from "./VehicleLocalization";

const VehicleInformation = () => {
  return (
    <S.container>
      <VehicleTitle />
      <VehicleModel />
      <VehiclePrice />
      <VehicleDetails />
      <VehicleLocalization />
    </S.container>
  );
};

export default VehicleInformation;
