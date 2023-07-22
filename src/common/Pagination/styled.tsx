import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;

export const Button = styled.div<{ disabled: boolean }>`
  display: flex;
  margin: 10px;
  font-size: 15px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  background-color: ${({ theme }) => theme.light.color.ebb};
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  color: ${({ theme }) => theme.light.color.mineShaft};
  @media (max-width: ${({ theme }) => theme.light.breakpoint.min}) {
   padding: 5px;
  }
`;
