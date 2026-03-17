import styled from "styled-components";

export const VerticalFlexDiv = styled.div<{
  $justify: string;
  $align: string;
  $paddingX: string;
  $paddingY: string;
  $marginX?: number;
  $marginY?: number;
  $widthPixels?: boolean;
  $width: number;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};
  padding: ${(props) => `${props.$paddingY}em ${props.$paddingX}em`};
  margin: ${(props) =>
    props.$marginX && props.$marginY
      ? `${props.$marginX}em ${props.$marginY}em`
      : null};
  width: ${(props) =>
    props.$widthPixels ? `${props.$width}px` : `${props.$width}%`};
`;
