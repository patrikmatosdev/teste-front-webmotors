import React from "react";
import * as S from "./styles";

const Loading = () => {
  return (
    <S.container>
      <iframe
        title="Loading"
        src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40"
        color="#d3d3d3"
        frameBorder="0"
        class="giphy-embed"
        style={{ backgroundColor: "none transparent" }}
      />
    </S.container>
  );
};

export default Loading;
