import React from "react";
import * as S from "./syles";
import ImageVehicle from "./ImageVehicle/index";
import VehicleInformation from "./VehicleInformation/index";

const ResultVehicles = ({ listVehicle }) => {
  return (
    <S.container>
      <ImageVehicle image={listVehicle.Image} />
      <VehicleInformation />
    </S.container>
  );
};

export default ResultVehicles;
