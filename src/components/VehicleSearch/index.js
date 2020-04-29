import React from "react";
import * as S from "./styles";
import CheckBox from "../Form/Checkbox";
import IconInput from "./IconInput";
import Image from "../../assets/img/local.png";
import Select from "../Form/Select";
import TogglerLink from "../Form/TogglerLink";

const Form = () => {
  return (
    <S.container className="containerForm">
      <S.Row>
        <S.containerCheckBox className="containerCheckBox">
          <CheckBox title="Novos" />
          <CheckBox title="Usados" checked />
        </S.containerCheckBox>
      </S.Row>

      <S.Row>
        <S.containerItems className="containerItems">
          <S.Row>
            <S.Col>
              <IconInput icon={Image} />
            </S.Col>
          </S.Row>

          <S.Row>
            <S.Col>
              <Select />
            </S.Col>

            <S.Col>
              <Select />
            </S.Col>
          </S.Row>
        </S.containerItems>

        <S.containerItems className="containerItems">
          <S.Row>
            <S.Col>
              <Select />
            </S.Col>

            <S.Col>
              <Select />
            </S.Col>
          </S.Row>
          <S.Row>
            <S.Col>
              <Select />
            </S.Col>
          </S.Row>
        </S.containerItems>
      </S.Row>

      <S.Row>
        <S.Col>
          <TogglerLink>Busca Avançada</TogglerLink>
        </S.Col>
        <S.Col>col 2</S.Col>
      </S.Row>
    </S.container>
  );
};

export default Form;
