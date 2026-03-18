import styled from "styled-components";

export const HorizontalFlexForm = styled.form<{
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
  $borderRadius?: number;
  $applyBorder?: boolean;
  $borderWidth?: number;
  $borderColor?: string;
  $borderStyle?: string;
  $blur?: boolean;
}>`
  display: flex;
  height: auto;
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
    props.$widthPixels ? `${props.$width}` : `${props.$width}%`};
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "inherit"};
  border-radius: ${(props) =>
    props.$borderRadius ? `${props.$borderRadius}px` : "0px"};
  border: ${(props) =>
    props.$applyBorder
      ? `${props.$borderWidth}px ${props.$borderStyle} ${props.$borderColor}`
      : "none"};
  backdrop-filter: ${(props) => (props.$blur ? "blur(10px)" : "")};
`;
