import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.mineShaft};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    display: none;
  }
`;
export const Name = styled(Link)`
  color: ${({ theme }) => theme.color.porcelain};
  padding: 10px;
  margin: 5px;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    opacity: 0.5s;
    transform: scale(1.03);
    cursor: pointer;
    color: ${({ theme }) => theme.color.cornFlowerLilac};
  }
`;

export const WrapperTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;
export const Tag = styled(Link)`
  background: linear-gradient(90deg, #a5c7da8f, #da9c978f);
  color: ${({ theme }) => theme.color.mineShaft};
  padding: 10px;
  margin: 10px;
  border-radius: 15px;
  text-decoration: none;
  font-size: 15px;
  &:hover {
    opacity: 0.5s;
    transform: scale(1.03);
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    font-size: 8px;
    padding: 6px;
    margin: 6px;
  }
`;
