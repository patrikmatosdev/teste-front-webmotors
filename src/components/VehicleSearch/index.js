import React, { useState } from "react";
import * as S from "./styles";
import CheckBox from "../Form/Checkbox";
import IconInput from "./IconInput";
import Image from "../../assets/img/local.png";
import Select from "../Form/Select";
import TogglerLink from "../Form/TogglerLink";
import ButtonsForm from "../Form/ButtonsForm/index";

const Form = (props) => {
  const [year, setYear] = useState();
  const [model, setModel] = useState();
  const [brand, setBrand] = useState();
  const [version, setVersion] = useState();
  const [price, setPrice] = useState();
  const [checkNewCars, setcheckNewCars] = useState(false);
  const [checkUsedCars, setCheckUsedCars] = useState(false);

  const onChangeYear = (option) => {
    setYear(option.value);
  };

  const onChangeModel = (option) => {
    setModel(option.value);
  };

  const onChangeBrand = (option) => {
    setBrand(option.value);
  };

  const onChangeVersion = (option) => {
    setVersion(option.value);
  };

  const onChangePrice = (option) => {
    setPrice(option.value);
  };

  const onCheckNewCars = (option) => {
    setcheckNewCars(option);
  };

  const onCheckUsedCars = (option) => {
    setCheckUsedCars(option);
  };

  return (
    <S.container className="containerForm">
      <S.Row>
        <S.containerCheckBox className="containerCheckBox">
          <CheckBox
            title="Novos"
            checked={checkNewCars}
            onClick={() => onCheckNewCars(!checkNewCars)}
          />
          <CheckBox
            title="Usados"
            checked={checkUsedCars}
            onClick={() => onCheckUsedCars(!checkUsedCars)}
          />
        </S.containerCheckBox>
      </S.Row>

      <S.Row>
        <S.containerItems className="containerItems">
          <S.Row>
            <S.Col>
              <IconInput mileages={props.mileages} icon={Image} />
            </S.Col>
          </S.Row>

          <S.Row>
            <S.Col>
              <Select
                placeholder="Ano Desejado"
                label="Ano"
                onChange={onChangeYear}
                options={props.yearsFab}
                value={year}
              />
            </S.Col>

            <S.Col>
              <Select
                placeholder="Faixa de Preço"
                label="Preço"
                onChange={onChangePrice}
                options={props.prices}
                value={price}
              />
            </S.Col>
          </S.Row>
        </S.containerItems>

        <S.containerItems className="containerItems">
          <S.Row>
            <S.Col>
              <Select
                label="Marca"
                placeholder="Marca:"
                value={brand}
                options={props.brands}
                onChange={onChangeBrand}
              />
            </S.Col>

            <S.Col>
              <Select
                label="Modelo"
                onChange={onChangeModel}
                options={props.models}
                value={model}
                placeholder="Modelo:"
              />
            </S.Col>
          </S.Row>
          <S.Row>
            <S.Col>
              <Select
                placeholder="Versão:"
                label="Versão"
                onChange={onChangeVersion}
                options={props.versions}
                value={version}
              />
            </S.Col>
          </S.Row>
        </S.containerItems>
      </S.Row>

      <S.Row>
        <S.Col>
          <TogglerLink>Busca Avançada</TogglerLink>
        </S.Col>
        <S.Col>
          <ButtonsForm />
        </S.Col>
      </S.Row>
    </S.container>
  );
};

export default Form;
