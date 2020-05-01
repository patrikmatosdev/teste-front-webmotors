import React from "react";
import * as S from "./syles";
import ImageVehicle from "./ImageVehicle/index";
import VehicleInformation from "./VehicleInformation/index";

const ResultVehicles = ({ items }) => {
  console.log(items);

  return (
    <S.container>
      <ImageVehicle image={items.Image} />
      <VehicleInformation
        title={items.Make}
        model={items.Model}
        version={items.Version}
        price={items.Price}
        yearFab={items.YearFab}
        yearModel={items.YearModel}
        kilometers={items.KM}
      />
    </S.container>
  );
};

export default ResultVehicles;
