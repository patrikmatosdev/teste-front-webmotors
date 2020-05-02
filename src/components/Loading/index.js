import React from "react";
import * as S from "./styles";
import LoadingGif from "../../assets/gifs/loading.gif";
const Loading = () => {
  return (
    <S.container>
      <img src={LoadingGif} alt="Loading" width="200" height="200" />
    </S.container>
  );
};

export default Loading;
