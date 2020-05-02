import React, { useState, useEffect } from "react";
import Axios from "axios";
import BoxVehicle from "../../components/BoxVehicle";
import Header from "../../components/Header/index";
import ShoppingTypes from "../../components/ShoppingTypes";
import VehicleSearch from "../../components/VehicleSearch";
import ResultVehicles from "../../components/ResultVehicles";
import Loading from "../../components/Loading/index";

const Home = () => {
  const [models, setModels] = useState([]);
  const [brand, setBrand] = useState([]);
  const [versions, setVersions] = useState([]);
  const [prices, setPrices] = useState([]);
  const [yearsFab, setYearsFab] = useState([]);
  const [mileages, setMileages] = useState([]);
  const [listVehicle, setListVehicle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Solicitar Dados da API
    async function FetchInitialData() {
      const response = await Axios.get(
        "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1"
      );

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

      setLoading(false);
      setListVehicle(response.data);
      setMileages(parsedMileages);
      setYearsFab(parsedYearsFab);
      setPrices(parsedPrices);
      setVersions(parsedVersions);
    }

    FetchInitialData();
  }, []);

  //Solicitar Modelos
  async function FetchModels() {
    if (!brand.value) return;
    const response = await Axios.get(
      `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${brand.value}`
    );

    const parsedModels = response.data.map((model) => {
      return {
        label: model.Name,
        value: model.MakeID,
      };
    });

    setModels(parsedModels);
  }

  const onChangeFilter = (a) => {
    alert(a);
  };

  console.log(brand);
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
          brands={brand}
          models={models}
          onChange={() => onChangeFilter()}
        />
      </BoxVehicle>
      <BoxVehicle
        style={{ backgroundColor: "none", padding: "0", textAlign: "center" }}
      >
        {loading ? (
          <Loading />
        ) : (
          listVehicle.map((item) => {
            return <ResultVehicles key={item.id} items={item} />;
          })
        )}
      </BoxVehicle>
    </div>
  );
};

export default Home;
