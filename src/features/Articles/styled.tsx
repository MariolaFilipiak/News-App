import styled from "styled-components";

export const Section = styled.section`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  margin-top: 30px;
  margin-bottom: 50px;
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
    margin-top: 10px;
  }
`;
export const Tile = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.cornFlowerLilac};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.mineShaft};
  line-height: 1.4;
  letter-spacing: 0.5px;
  font-size: 25px;
  margin-top: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    font-size: 20px;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
`;

export const ArticleDate = styled.h3`
  color: ${({ theme }) => theme.color.silverChalice};
  margin: 0;
  line-height: 1.4;
  letter-spacing: 0.4;
  font-size: 15px;
  font-weight: normal;
`;

export const Description = styled.h4`
  color: ${({ theme }) => theme.color.doveGray};
  margin: 0;
  line-height: 1.4;
  letter-spacing: 0.8px;
  font-size: 20px;
  font-weight: normal;
  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    font-size: 15px;
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 3 / 2;
`;
export const Button = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-bottom: 50px;
  background-color: ${({ theme }) => theme.color.ebb};
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
`;
export const MoreButton = styled.a`
  display: flex;
  &:hover {
    opacity: 0.5s;
    transform: scale(1.03);
    cursor: pointer;
  }
`;
