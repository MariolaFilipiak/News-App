import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
  background-color: ${({ theme }) => theme.color.mineShaft};
  color: ${({ theme }) => theme.color.porcelain};
  width: 100%;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-wrap: nowrap;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`;
export const Title = styled(Link)`
  padding: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.porcelain};
  font-size: 30px;
  font-weight: bold;
  &:hover {
    color: ${({ theme }) => theme.color.cornFlowerLilac};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 6px;
    font-size: 20px;
  }
`;
export const Bar = styled.input`
  padding: 10px;
  color: #f1f3f4;
  background-color: #6a6a6a;
  border-radius: 10px;
  border: none;
  width: 35vw;
  font-size: 15px;
  &::placeholder {
    color: #f1f3f4;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    padding: 6px;
    margin: 10px;
    font-size: 12px;
  }
`;

export const Button = styled.div`
  background-color: ${({ theme }) => theme.color.doveGray};
  width: 20px;
  height: 20px;
  margin: 20px;
  padding: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    width: 15px;
  }
`;
