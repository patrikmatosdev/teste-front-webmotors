import React from "react";
import * as S from "./styles";
import Select from "../../Form/Select";

const IconInput = (props) => {
  const containerStyle = {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  };

  const distanceOptions = [
    { label: "50km", value: 50 },
    { label: "100km", value: 100 },
    { label: "200km", value: 200 },
  ];

  return (
    <S.container>
      <S.locationContainer>
        <S.containerIcon>
          <S.icon icon={props.icon} />
        </S.containerIcon>
        <S.containerLabel>
          <S.label>Onde:</S.label>
        </S.containerLabel>
        <S.containerInput>
          <S.input type="text" value="São Paulo - SP" />
        </S.containerInput>
      </S.locationContainer>
      <S.distanceContainer>
        <Select
          containerStyle={containerStyle}
          placeholder="Raio"
          label="Raio"
          value={100}
          options={distanceOptions}
        />
      </S.distanceContainer>
    </S.container>
  );
};

export default IconInput;
