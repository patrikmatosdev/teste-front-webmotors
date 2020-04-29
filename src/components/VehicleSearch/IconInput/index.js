import React from "react";
import * as S from "./styles";
import Select from "../../Form/Select";

const IconInput = (props) => {
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
        <Select />
      </S.distanceContainer>
    </S.container>
  );
};

export default IconInput;
