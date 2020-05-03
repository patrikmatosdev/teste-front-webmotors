import React, { useState, useEffect } from "react";
import Axios from "axios";
import BoxVehicle from "../../components/BoxVehicle";
import Header from "../../components/Header/index";
import ShoppingTypes from "../../components/ShoppingTypes";
import VehicleSearch from "../../components/VehicleSearch";
import ResultVehicles from "../../components/ResultVehicles";
import Loading from "../../components/Loading/index";
import styled from "styled-components";
import PageWidth from "../../components/PageWidth/index";

const ItemWrapper = styled.div`
  text-align: center;

  @media (min-width: 950px) {
    display: inline-block;
    vertical-align: top;
    width: 33.33%;
    text-align: ${(props) => props.column};
  }
`;

const Home = () => {
  const [listVehicle, setListVehicle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);
  let textAlign;
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
      <BoxVehicle style={{ padding: 10 }}>
        <PageWidth>
          <Header />
          <ShoppingTypes />
          <VehicleSearch
            onChange={(ValuesVehicle) => onChangeFilter(ValuesVehicle)}
          />
        </PageWidth>
      </BoxVehicle>
      <BoxVehicle
        style={{
          padding: 0,
        }}
      >
        <PageWidth>
          {loading ? (
            <Loading />
          ) : (
            listVehicle.map((item, index) => {
              if (!textAlign || textAlign === "right") {
                textAlign = "left";
              } else if (textAlign === "left") {
                textAlign = "center";
              } else if (textAlign === "center") {
                textAlign = "right";
              }
              return (
                <ItemWrapper
                  column={textAlign}
                  className="itemWrapper"
                  key={item.ID}
                >
                  <ResultVehicles className="a" items={item} />
                </ItemWrapper>
              );
            })
          )}
        </PageWidth>
      </BoxVehicle>
    </div>
  );
};

export default Home;
