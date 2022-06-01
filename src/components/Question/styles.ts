import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  height: 90vh;

  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`;

export const Label = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weight.medium};
    color: ${theme.colors.typography.dark};
    line-height: ${theme.font.sizes.xlarge};
    text-align: center;
  `}
`;

export const NextButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
