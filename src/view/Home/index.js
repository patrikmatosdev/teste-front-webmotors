import React, { useState, useEffect } from "react";
import Axios from "axios";
import Box from "../../components/Box";
import Header from "../../components/Header/index";
import ShoppingTypes from "../../components/ShoppingTypes";
import VehicleSearch from "../../components/VehicleSearch";

const Home = () => {
  const [fetchModel, setFetchModel] = useState([]);

  useEffect(() => {
    async function FetchModel() {
      const response = await Axios.get(
        "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=1"
      );
      console.log(response.data);
    }
    FetchModel();
  }, []);

  return (
    <div className="container">
      <Box>
        <Header />
        <ShoppingTypes />
        <VehicleSearch />
      </Box>
    </div>
  );
};

export default Home;
