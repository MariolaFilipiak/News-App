import styled from "styled-components";

export const Tile = styled.a`
  text-decoration: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  transition: opacity 1s linear 0s, transform 1s linear 0s;

  transition: 0.3s;
  &:hover {
    opacity: 0.5s;
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) =>
    theme.darkMode ? theme.dark.color.porcelain : theme.light.color.mineShaft};
  line-height: 1.4;
  letter-spacing: 0.5px;
  font-size: 25px;
  margin-top: 16px;

  @media (max-width: ${({ theme }) => theme.light.breakpoint.min}) {
    font-size: 20px;
  }
`;

export const InfoBoxGrid = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
`;

export const ArticleDate = styled.h3`
  color: ${({ theme }) => theme.light.color.silverChalice};
  margin: 0;
  line-height: 1.4;
  letter-spacing: 0.4;
  font-size: 15px;
  font-weight: normal;
`;

export const Description = styled.h4`
  color: ${({ theme }) =>
    theme.darkMode ? theme.dark.color.ebb : theme.light.color.mineShaft};
  margin: 0;
  line-height: 1.4;
  letter-spacing: 0.8px;
  font-size: 18px;
  font-weight: normal;
  @media (max-width: ${({ theme }) => theme.light.breakpoint.min}) {
    font-size: 12px;
  }
`;
export const Paragraph = styled.p`
  color: ${({ theme }) =>
    theme.darkMode ? theme.dark.color.porcelain : theme.light.color.doveGray};
  margin: 0;
  line-height: 1.4;
  letter-spacing: 0.8px;
  font-size: 15px;
  font-weight: normal;
  @media (max-width: ${({ theme }) => theme.light.breakpoint.min}) {
    font-size: 10px;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
export const Button = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-bottom: 50px;
  background-color: ${({ theme }) => theme.light.color.ebb};
  width: 100px;
  padding: 5px;
  color: 262626;
  letter-spacing: 1.4;
`;
export const Box = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
`;
export const MoreButton = styled.a`
  display: flex;
  &:hover {
    opacity: 0.5s;
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const ListView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 80%;
  margin: 0 auto;
  gap: 30px;
  margin-top: 30px;
  margin-bottom: 50px;
  @media (max-width: ${({ theme }) => theme.light.breakpoint.mobile}) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const List = styled.a`
  display: flex;
  align-items: stretch;
  text-decoration: none;
  transition: opacity 1s linear 0s, transform 1s linear 0s;
  transition: 0.3s;
  &:hover {
    opacity: 0.5s;
    transform: scale(1.03);
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.light.breakpoint.medium}) {
    flex-direction: column;
  }
`;
export const GridView = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  margin-top: 30px;
  margin-bottom: 50px;
  @media (max-width: ${({ theme }) => theme.light.breakpoint.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.light.breakpoint.mobile}) {
    grid-template-columns: 1fr;
    margin-top: 10px;
  }
`;
export const InfoBoxList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
  margin-left: 20px;
`;
export const ImageList = styled.img`
  width: 30%;
  @media (max-width: ${({ theme }) => theme.light.breakpoint.medium}) {
    width: 100%;
    aspect-ratio: 3 / 2;
  }
`;
export const BoxList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-content: space-between;
`;
export const BoxGrid = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
