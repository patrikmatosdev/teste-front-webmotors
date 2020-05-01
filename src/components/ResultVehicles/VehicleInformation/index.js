import React from "react";
import * as S from "./styles";
import VehicleTitle from "./VehicleTitle";
import VehicleVersion from "./VehicleVersion";
import VehiclePrice from "./VehiclePrice";
import VehicleDetails from "./VehicleDetails/index";
import VehicleLocalization from "./VehicleLocalization";

const VehicleInformation = (props) => {
  return (
    <S.container>
      <VehicleTitle title={props.title} model={props.model} />
      <VehicleVersion version={props.version} />
      <VehiclePrice price={props.price} />
      <VehicleDetails
        yearFab={props.yearFab}
        yearModel={props.yearModel}
        kilometers={props.kilometers}
      />
      <VehicleLocalization />
    </S.container>
  );
};

export default VehicleInformation;
