import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
  background-color: #101010;
  color: #ffffff;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  flex-wrap: nowrap;
  justify-items: center;
  align-items: center;
`;
export const Title = styled(Link)`
  margin: 20px;
  padding: 10px;
  text-decoration: none;
  color: #ffffff;
  font-size: 2vw;
`;
export const Bar = styled.input`
  margin: 20px;
  padding: 10px;
  color: #ffffff;
  background-color: #6a6a6a;
  border-radius: 10px;
  border: none;
  width: 500px;
  &::placeholder {
    color: #ffffff;
  }
`;

export const Button = styled.div`
  background-color: #6a6a6a;
  width: 20px;
  height: 20px;
  margin: 20px;
  padding: 10px;
`;
