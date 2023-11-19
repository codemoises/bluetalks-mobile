import styled, { DefaultTheme, css } from "styled-components";

export const Header = styled.div`
    ${({ theme }) => css`
        position: fixed;
        width: 100%;
        height: 65px;
        background: ${theme.colors.mblue};
        display: flex;
        align-items: center;
        justify-content: center;

    `};
`;