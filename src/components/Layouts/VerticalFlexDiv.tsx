import styled from "styled-components";

export const VerticalFlexDiv = styled.div<{
  $justify: string;
  $align: string;
  $paddingX: string;
  $paddingY: string;
  $marginX?: number;
  $marginY?: number;
  $widthPixels?: boolean;
  $width: string;
  $backgroundColor?: string;
  $backgroundImg?: string;
  $backgroundSize?: string;
  $height?: string;
}>`
  display: flex;
  text-align: center;
  height: auto;
  flex-direction: column;
  position: relative;
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};
  padding: ${(props) => `${props.$paddingY}em ${props.$paddingX}em`};
  margin: ${(props) =>
    props.$marginX && props.$marginY
      ? `${props.$marginX}em ${props.$marginY}em`
      : null};
  width: ${(props) =>
    props.$widthPixels ? `${props.$width}` : `${props.$width}%`};
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "inherit"};
  height: ${(props) => (props.$height ? props.$height : "auto")};
  background-image: ${(props) =>
    props.$backgroundImg ? `url('${props.$backgroundImg}')` : "none"};
  background-size: ${(props) =>
    props.$backgroundSize ? props.$backgroundSize : "auto"};
`;
