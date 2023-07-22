import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Text = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.light.color.porcelain};
  @media (max-width: ${({ theme }) => theme.light.breakpoint.mobile}) {
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
  @media (max-width: ${({ theme }) => theme.light.breakpoint.mobile}) {
    width: 25px;
  }
`;
