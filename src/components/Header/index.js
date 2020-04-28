import React from "react";
import * as S from "./styles";

const Header = () => {
  return (
    <S.container className="containerHeader">
      <S.containerLogo className="containerLogo">
        <S.logo className="logo" />
      </S.containerLogo>
    </S.container>
  );
};

export default Header;
