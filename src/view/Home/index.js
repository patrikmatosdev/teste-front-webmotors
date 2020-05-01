import React, { useState, useEffect } from "react";
import Axios from "axios";
import BoxVehicle from "../../components/BoxVehicle";
import Header from "../../components/Header/index";
import ShoppingTypes from "../../components/ShoppingTypes";
import VehicleSearch from "../../components/VehicleSearch";
import ResultVehicles from "../../components/ResultVehicles";

const Home = () => {
  const [models, setModels] = useState([]);
  const [brands, setBrands] = useState([]);
  const [versions, setVersions] = useState([]);
  const [prices, setPrices] = useState([]);
  const [yearsFab, setYearsFab] = useState([]);
  const [mileages, setMileages] = useState([]);
  const [listVehicle, setListVehicle] = useState([]);

  useEffect(() => {
    //Solicitar Dados da API
    async function FetchInitialData() {
      const response = await Axios.get(
        "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1"
      );

      //Solicitar Modelos
      const parsedModels = response.data.map((model) => {
        return {
          label: model.Model,
          value: model.ID,
        };
      });

      //Solicitar Marcas
      const parsedBrands = response.data.map((brand) => {
        return {
          label: brand.Make,
          value: brand.ID,
        };
      });

      //Solicitar Versão
      const parsedVersions = response.data.map((version) => {
        return {
          label: version.Version,
          value: version.ID,
        };
      });

      //Solicitar Preços
      const parsedPrices = response.data.map((price) => {
        return {
          label: price.Price,
          value: price.ID,
        };
      });

      // Solicitar Anos da Fabricação
      const parsedYearsFab = response.data.map((yearsFab) => {
        return {
          label: yearsFab.YearFab,
          value: yearsFab.ID,
        };
      });

      //Solicitar Quilometragem
      const parsedMileages = response.data.map((mileages) => {
        return {
          label: mileages.KM,
          value: mileages.ID,
        };
      });

      setListVehicle(response.data);
      setMileages(parsedMileages);
      setYearsFab(parsedYearsFab);
      setPrices(parsedPrices);
      setVersions(parsedVersions);
      setBrands(parsedBrands);
      setModels(parsedModels);
    }

    FetchInitialData();
  }, []);

  return (
    <div className="container">
      <BoxVehicle>
        <Header />
        <ShoppingTypes />
        <VehicleSearch
          key={models.id}
          mileages={mileages}
          yearsFab={yearsFab}
          prices={prices}
          versions={versions}
          brands={brands}
          models={models}
        />
      </BoxVehicle>
      <BoxVehicle style={{ backgroundColor: "#eeeee", textAlign: "center" }}>
        <ResultVehicles listVehicle={listVehicle} />
        <ResultVehicles listVehicle={listVehicle} />
        <ResultVehicles listVehicle={listVehicle} />
      </BoxVehicle>
    </div>
  );
};

export default Home;
