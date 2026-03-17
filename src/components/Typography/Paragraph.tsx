import styled from "styled-components";

export const Paragraph = styled.p<{
  $fontSize: number;
  $fontWeight: number;
  $fontFamily?: string;
  $margin?: number;
  $padding?: number;
  $color: string;
}>`
  color: ${(props) => props.$color};
  font-size: ${(props) => props.$fontSize}rem;
  font-weight: ${(props) => props.$fontWeight};
  font-family: ${(props) =>
    props.$fontFamily ? props.$fontFamily : "Open Sans"};
  margin: ${(props) => (props.$margin ? `${props.$margin}em` : "0")};
  padding: ${(props) => (props.$padding ? `${props.$padding}em` : "0")};
`;
