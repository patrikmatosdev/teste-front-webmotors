import React, { useState, useEffect } from "react";
import Axios from "axios";
import Box from "../../components/Box";
import Header from "../../components/Header/index";
import ShoppingTypes from "../../components/ShoppingTypes";
import VehicleSearch from "../../components/VehicleSearch";

const Home = () => {
  const [models, setModels] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    async function FetchInitialData() {
      const response = await Axios.get(
        "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=1"
      );

      const parsedModels = response.data.map((model) => {
        return {
          label: model.Name,
          value: model.ID,
        };
      });

      setModels(parsedModels);
    }

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
      <Box>
        <Header />
        <ShoppingTypes />
        <VehicleSearch brands={brands} models={models} />
      </Box>
    </div>
  );
};

export default Home;
