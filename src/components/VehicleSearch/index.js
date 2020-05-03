import React, { useState, useEffect } from "react";
import Axios from "axios";
import * as S from "./styles";
import CheckBox from "../Form/Checkbox";
import IconInput from "./IconInput";
import Image from "../../assets/img/local.png";
import Select from "../Form/Select";
import TogglerLink from "../Form/TogglerLink";
import ButtonsForm from "../Form/ButtonsForm/index";

const VehicleSearch = (props) => {
  const [year, setYear] = useState();
  const [model, setModel] = useState();
  const [brand, setBrand] = useState();
  const [version, setVersion] = useState();
  const [price, setPrice] = useState();
  const [checkNewCars, setcheckNewCars] = useState(false);
  const [checkUsedCars, setCheckUsedCars] = useState(false);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [versions, setVersions] = useState([]);
  const [prices, setPrices] = useState([{ label: 1, value: 1 }]);
  const [years, setYears] = useState([{ label: 2020, value: 1 }]);

  const onChangeYear = (option) => {
    setYear(option.value);
  };

  const onChangeModel = (option) => {
    setModel(option.value);
    FetchVersions(option.value);
  };

  const onChangeBrand = (option) => {
    setBrand(option.value);
    FetchModels(option.value);
  };

  const onChangeVersion = (option) => {
    setVersion(option.value);
  };

  const onChangePrice = (option) => {
    setPrice(option.value);
    console.log("chegou", option);
  };

  const onCheckNewCars = (option) => {
    setcheckNewCars(option);
  };

  const onCheckUsedCars = (option) => {
    setCheckUsedCars(option);
  };

  const ClearData = () => {
    setBrand("");
    setModel("");
    setPrice("");
    setCheckUsedCars("");
    setYear("");
    setVersion("");
  };

  useEffect(() => {
    FetchBrands();
  }, []);

  //Solicitar Marcas
  async function FetchBrands() {
    const response = await Axios.get(
      "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make"
    );
    const parsedBrands = response.data.map((brand) => {
      return {
        label: brand.Name,
        value: brand.ID,
      };
    });
    setBrands(parsedBrands);
  }

  async function FetchModels(brandId) {
    const response = await Axios.get(
      `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${brandId}`
    );

    const parsedModels = response.data.map((model) => {
      return {
        label: model.Name,
        value: model.ID,
      };
    });
    setModels(parsedModels);
  }

  async function FetchVersions(modelId) {
    const response = await Axios.get(
      `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=${modelId}`
    );

    const parsedVersions = response.data.map((version) => {
      return {
        label: version.Name,
        value: version.ID,
      };
    });
    setVersions(parsedVersions);
  }

  const onSearch = () => {
    const valuesVehicle = {
      // @TODO ~ Pegar City e Radius do ICONINPUT
      city: "",
      radius: "",
      brand: brand,
      model: model,
      version: version,
      year: year,
      price: price,
    };

    props.onChange(valuesVehicle);
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
              <IconInput
                city={"São Paulo - SP"}
                mileages={props.mileages}
                icon={Image}
              />
            </S.Col>
          </S.Row>

          <S.Row>
            <S.Col>
              <Select
                placeholder="Ano Desejado"
                label="Ano"
                onChange={onChangeYear}
                options={years}
                value={year}
              />
            </S.Col>

            <S.Col>
              <Select
                key={prices.value}
                placeholder="Faixa de Preço"
                label="R$"
                onChange={onChangePrice}
                options={prices}
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
                options={brands}
                onChange={onChangeBrand}
              />
            </S.Col>

            <S.Col>
              <Select
                label="Modelo"
                onChange={onChangeModel}
                options={models}
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
                options={versions}
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
          <ButtonsForm
            onClickSearch={() => onSearch()}
            onClickClear={() => ClearData()}
          />
        </S.Col>
      </S.Row>
    </S.container>
  );
};

export default VehicleSearch;
