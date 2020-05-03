import React, { useState, useEffect } from "react";
import Axios from "axios";
import BoxVehicle from "../../components/BoxVehicle";
import Header from "../../components/Header/index";
import ShoppingTypes from "../../components/ShoppingTypes";
import VehicleSearch from "../../components/VehicleSearch";
import ResultVehicles from "../../components/ResultVehicles";
import Loading from "../../components/Loading/index";

const Home = () => {
  const [listVehicle, setListVehicle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);

  async function FetchVehicles() {
    setLoading(true);

    const response = await Axios.get(
      "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1"
    );

    setListVehicle(response.data);
    setLoading(false);
  }

  useEffect(() => {
    //Solicitar Dados da API
    FetchVehicles();
    console.log("Filtrando => ", filtered);
  }, [filtered]);

  // Funçao chamada quando o usuário preencher os filtros e clicar em pesquisar
  const onChangeFilter = (filters) => {
    setFiltered(filters);
  };

  return (
    <div className="container">
      <BoxVehicle>
        <Header />
        <ShoppingTypes />
        <VehicleSearch
          onChange={(ValuesVehicle) => onChangeFilter(ValuesVehicle)}
        />
      </BoxVehicle>
      <BoxVehicle
        style={{
          backgroundColor: "#ffffff",
          padding: "none",
        }}
      >
        {loading ? (
          <Loading />
        ) : (
          listVehicle.map((item) => {
            return <ResultVehicles key={item.ID} items={item} />;
          })
        )}
      </BoxVehicle>
    </div>
  );
};

export default Home;
