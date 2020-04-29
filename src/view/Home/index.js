import React, { useState, useEffect } from "react";
import Axios from "axios";
import BoxVehicle from "../../components/BoxVehicle";
import Header from "../../components/Header/index";
import ShoppingTypes from "../../components/ShoppingTypes";
import VehicleSearch from "../../components/VehicleSearch";

const Home = () => {
  const [models, setModels] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    //Solicitar Todos
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

    //Pegar os tipos
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

    FetchBrands();
    FetchInitialData();
  }, []);

  console.log(brands);

  return (
    <div className="container">
      <BoxVehicle>
        <Header />
        <ShoppingTypes />
        <VehicleSearch brands={brands} models={models} />
      </BoxVehicle>
    </div>
  );
};

export default Home;
