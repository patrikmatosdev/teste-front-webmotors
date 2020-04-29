import React from "react";
import Box from "../../components/Box";
import Header from "../../components/Header/index";
import ShoppingTypes from "../../components/ShoppingTypes";
import VehicleSearch from "../../components/VehicleSearch";

const Home = () => {
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
