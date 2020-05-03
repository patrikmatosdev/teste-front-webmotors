import React from "react";
import styled from "styled-components";

const Container = styled.div`
  @media (min-width: 933px) {
    width: 933px;
    margin: auto;
  }
`;

const PageWidth = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageWidth;
