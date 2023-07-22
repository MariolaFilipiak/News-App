import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.light.color.mineShaft};
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
