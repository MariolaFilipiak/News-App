import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Text = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.porcelain};
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 22px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    font-size: 18px;
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;
export const Icon = styled.img`
  width: 50px;
  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    width: 25px;
  }
`;
