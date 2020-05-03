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

  useEffect(() => {
    //Solicitar Dados da API
    async function FetchInitialData() {
      const response = await Axios.get(
        "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1"
      );

      setListVehicle(response.data);
      setLoading(false);
    }
    FetchInitialData();
  }, []);

  // Funçao chamada quando o usuário preencher os filtros e clicar em pesquisar
  const onChangeFilter = (ValuesVehicle) => {
    setFiltered(ValuesVehicle);
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
        style={{ backgroundColor: "none", padding: "0", textAlign: "center" }}
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
