import styled from "styled-components";
import image from "../../../../assets/img/local.png";

export const container = styled.div`
  padding-top: 8px;
  border-top: 1px solid #eee;
`;

export const containerIcon = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

export const containerLabel = styled.div`
  display: inline-block;
  vertical-align: top;
`;

export const label = styled.div`
  font-size: 12px;
  color: #999;
  font-weight: bold;
  line-height: 16px;
`;

export const icon = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${image}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
