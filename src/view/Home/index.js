import React, { useState, useEffect } from "react";
import Axios from "axios";
import BoxVehicle from "../../components/BoxVehicle";
import Header from "../../components/Header/index";
import ShoppingTypes from "../../components/ShoppingTypes";
import VehicleSearch from "../../components/VehicleSearch";

const Home = () => {
  const [models, setModels] = useState([]);
  const [brands, setBrands] = useState([]);
  const [versions, setVersions] = useState([]);
  const [prices, setPrices] = useState([]);
  const [yearsFab, setYearsFab] = useState([]);
  const [mileages, setMileages] = useState([]);

  useEffect(() => {
    //Pegar Modelo
    async function FetchInitialData() {
      const response = await Axios.get(
        "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1"
      );
      // Conversão de chaves
      const parsedModels = response.data.map((model) => {
        return {
          label: model.Model,
          value: model.ID,
        };
      });

      setModels(parsedModels);
    }

    //Pegar Marca
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

    // Pegar Versão
    async function FetchVersion() {
      const response = await Axios.get(
        "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1"
      );

      const parsedVersions = response.data.map((version) => {
        return {
          label: version.Version,
          value: version.ID,
        };
      });

      setVersions(parsedVersions);
    }

    // Pegar Preços
    async function FetchPrice() {
      const response = await Axios.get(
        "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1"
      );

      const parsedPrice = response.data.map((price) => {
        return {
          label: price.Price,
          value: price.ID,
        };
      });

      setPrices(parsedPrice);
    }

    //Pegar Ano da Fabricação
    async function FetchYearsFab() {
      const response = await Axios.get(
        "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1"
      );

      const parsedYearsFab = response.data.map((yearsFab) => {
        return {
          label: yearsFab.YearFab,
          value: yearsFab.ID,
        };
      });

      setYearsFab(parsedYearsFab);
    }

    //Pegar Quilometragem
    async function FetchMileages() {
      const response = await Axios.get(
        "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1"
      );

      const parsedMileages = response.data.map((yearsFab) => {
        return {
          label: yearsFab.KM,
          value: yearsFab.ID,
        };
      });

      setMileages(parsedMileages);
    }

    FetchMileages();
    FetchYearsFab();
    FetchPrice();
    FetchVersion();
    FetchBrands();
    FetchInitialData();
  }, []);

  return (
    <div className="container">
      <BoxVehicle>
        <Header />
        <ShoppingTypes />
        <VehicleSearch
          mileages={mileages}
          yearsFab={yearsFab}
          prices={prices}
          versions={versions}
          brands={brands}
          models={models}
        />
      </BoxVehicle>
    </div>
  );
};

export default Home;
