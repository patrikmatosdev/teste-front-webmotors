import React from "react";
import * as S from "./styles";
import Header from "../Header/index";
import ShoppingTypes from "../ShoppingTypes";
import Form from "../Form";

const Box = () => {
  return (
    <S.container className="containerBox">
      <Header />
      <ShoppingTypes />
      <Form />
    </S.container>
  );
};

export default Box;
