import styled, { css } from "styled-components";

export const centerY = css`
  display: flex;
  align-items: center;
`;

export const marginB = css`
  margin-bottom: 7rem;
`;

export const Container = styled.div`
  max-width: 800px;
  min-height: 100%;
  margin: auto;

  ${(p) => p.isCenter && centerY};
   ${(p) => p.isMarginB && marginB};
`;
