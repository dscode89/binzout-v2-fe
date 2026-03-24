import styled from "styled-components";

export const AbsoluteWrapper = styled.div<{
  $top?: number;
  $bottom?: number;
  $left?: number;
  $right?: number;
  $padding?: number;
  $center?: boolean;
}>`
  position: absolute;
  top: ${(props) => props.$top}%;
  bottom: ${(props) => props.$bottom}%;
  left: ${(props) => props.$left}%;
  right: ${(props) => props.$right}%;
  padding: ${(props) => props.$padding}em;
  transform: ${(props) => (props.$center ? `translate(-50%, -50%)` : "")};
  z-index: 10;
`;
