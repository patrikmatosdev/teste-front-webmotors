import React, { useState } from "react";
import * as S from "./styles";
import CheckBox from "../Form/Checkbox";
import IconInput from "./IconInput";
import Image from "../../assets/img/local.png";
import Select from "../Form/Select";
import TogglerLink from "../Form/TogglerLink";

const Form = () => {
  const [year, setYear] = useState();

  const onChangeYear = (option) => {
    setYear(option.value);
  };

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
              <Select
                placeholder="Ano Desejado"
                label="Ano"
                onChange={onChangeYear}
                value={year}
                options={[
                  { label: "2020", value: 2020 },
                  { label: "2019", value: 2019 },
                  { label: "2018", value: 2018 },
                  { label: "2017", value: 2017 },
                  { label: "2016", value: 2016 },
                  { label: "2015", value: 2015 },
                  { label: "2014", value: 2014 },
                  { label: "2013", value: 2013 },
                  { label: "2012", value: 2012 },
                  { label: "2011", value: 2011 },
                ]}
              />
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
