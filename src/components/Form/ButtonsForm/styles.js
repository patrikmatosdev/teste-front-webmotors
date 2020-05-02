import styled from "styled-components";

export const container = styled.div`
  display: flex;
  padding-right: 15px;
`;

export const Row = styled.div`
  /* padding: 7px 0; */
  display: flex;
  flex: 1;
`;

export const col = styled.div`
  display: flex;
  text-align: right;
  flex: 1;
  padding: 0 6px;
`;

export const link = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  transition: 0.3s;
  color: #999;

  &:hover,
  &:focus {
    color: #bbb;
  }
`;

export const buttonOffers = styled.button`
  padding: 15px;
  font-size: 18px;
  color: #ffff;
  width: 100%;
  background-color: #a33;
  border: none;
  cursor: pointer;
  outline: none;
`;
