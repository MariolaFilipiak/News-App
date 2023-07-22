import styled from "styled-components";

export const Wrapper = styled.h2`
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  padding: 15px;
  color:${({ theme }) => theme.light.color.porcelain};
  letter-spacing: 1.4px;
  font-weight: normal;
  margin-top: 20px;
  @media (max-width: ${({ theme }) => theme.light.breakpoint.min}) {
    font-size: 12px;
  }
`;
