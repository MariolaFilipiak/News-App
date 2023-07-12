import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: #303030;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Name = styled(Link)`
  color: #ffffff;
  padding: 10px;
  margin: 5px;
  text-decoration: none;
`;
