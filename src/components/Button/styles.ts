import styled, { DefaultTheme, css } from "styled-components";

export const Button = styled.button`
    ${({ theme }) => css`
        background: ${theme.colors.primaryColor}
    `}
`;