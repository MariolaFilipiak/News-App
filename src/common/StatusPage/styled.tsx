import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  height: 50vh;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 30px;
  text-align: center;
`;
export const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) =>
    theme.darkMode ? theme.dark.color.porcelain : theme.light.color.mineShaft};
`;

