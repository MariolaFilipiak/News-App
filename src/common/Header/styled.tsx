import styled from "styled-components";

export const Wrapper = styled.header`
display: flex;
flex-direction: row;
justify-content: flex-end;
color: ${({ theme }) => theme.light.color.mineShaft};
`;

export const Box = styled.div`
display: flex;
margin-top: 10px;
color: ${({ theme }) =>
    theme.darkMode ? theme.dark.color.porcelain : theme.light.color.mineShaft};
`;
export const ToggleButton = styled.div`

`;