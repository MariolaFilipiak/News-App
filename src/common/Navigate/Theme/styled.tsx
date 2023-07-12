import styled, { css } from "styled-components";

interface IconWrapperProps {
  moveToRight?: boolean;
}
export const Box= styled.div`
border: 1px solid;
border-radius: 12px;
padding: 3px;
width: 48px;
display: flex;
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  padding: 3px;
  transition: transform 0.3s;

  ${({ moveToRight }) =>
    moveToRight &&
    css`
      transform: translateX(20px);
    `}
`;


