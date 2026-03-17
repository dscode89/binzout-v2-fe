import styled from "styled-components";

export const Divider = styled.div<{
  $bgColor: string;
  $width: number;
  $height: number;
  $widthPixels?: boolean;
  $marginX: number;
}>`
  height: ${(props) => props.$height}px;
  width: ${(props) =>
    props.$widthPixels ? `${props.$width}px` : `${props.$width}%`};
  background-color: ${(props) => props.$bgColor};
  margin-top: ${(props) => props.$marginX}em;
`;
