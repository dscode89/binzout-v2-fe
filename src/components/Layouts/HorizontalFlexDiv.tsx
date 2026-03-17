import styled from "styled-components";

export const HorizontalFlexDiv = styled.div<{
  $justify: string;
  $align: string;
  $paddingX: string;
  $paddingY: string;
  $marginX?: number;
  $marginY?: number;
  $widthPixels?: boolean;
  $width: string;
  $centered?: boolean;
  $backgroundColor?: string;
}>`
  display: flex;
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};
  padding: ${(props) => `${props.$paddingY}em ${props.$paddingX}em`};
  margin: ${(props) =>
    props.$marginX && props.$marginY
      ? `${props.$marginX}em ${props.$marginY}em`
      : props.$centered
        ? `0 auto`
        : null};

  width: ${(props) =>
    props.$widthPixels ? `${props.$width}px` : `${props.$width}%`};
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "inherit"};
`;
