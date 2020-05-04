import React, { useState } from "react";
import * as S from "./styles";
import VehicleButton from "./VehicleButton/index";
import vehicle from "../../assets/img/vehicle.png";
import Motorcycle from "../../assets/img/motorcycle.png";
import ButtonSell from "./ButtonSell";

const ShoppingTypes = () => {
  const [vehicleType, setVehicleType] = useState("car");

  return (
    <S.container className="containerShopping">
      <S.Col className="column-container">
        <S.containerButton className="containerButtonVehicle">
          <VehicleButton
            isActive={vehicleType === "car"}
            onClick={() => setVehicleType("car")}
            icon={vehicle}
            title="CARROS"
            type="COMPRAR"
          />
        </S.containerButton>
        <S.containerButton className="containerButton">
          <VehicleButton
            isActive={vehicleType === "motorcycle"}
            onClick={() => setVehicleType("motorcycle")}
            icon={Motorcycle}
            title="MOTOS"
            type="COMPRAR"
          />
        </S.containerButton>
      </S.Col>
      <S.Col>
        <S.containerButtonSell className="containerButtonSell">
          <ButtonSell />
        </S.containerButtonSell>
      </S.Col>
    </S.container>
  );
};

export default ShoppingTypes;
