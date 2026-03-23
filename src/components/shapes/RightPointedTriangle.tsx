import styled from "styled-components";

export const RightPointedTriangle = styled.div<{
  $topThickness: number;
  $bottomThickness: number;
  $leftThickness: number;
  $triangleColor: string;
}>`
  width: 0;
  height: 0;
  border-top: ${(props) => props.$topThickness}px solid transparent;
  border-bottom: ${(props) => props.$bottomThickness}px solid transparent;
  border-left: ${(props) =>
    `${props.$leftThickness}px solid ${props.$triangleColor}`};
`;
