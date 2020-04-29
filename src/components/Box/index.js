import React from "react";
import * as S from "./styles";

const Box = ({ children }) => {
  return <S.container className="containerBox">{children}</S.container>;
};

export default Box;
