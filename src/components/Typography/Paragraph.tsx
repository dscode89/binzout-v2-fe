import styled from "styled-components";

export const Paragraph = styled.p<{
  $fontSize: number;
  $fontWeight: number;
  $margin?: number;
}>`
  font-size: ${(props) => props.$fontSize}rem;
  font-weight: ${(props) => props.$fontWeight};
  margin: ${(props) => (props.$margin ? `${props.$margin}em` : null)};
`;
