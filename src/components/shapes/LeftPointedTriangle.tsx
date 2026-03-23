import styled from "styled-components";

export const LeftPointedTriangle = styled.div<{
  $topThickness: number;
  $bottomThickness: number;
  $rightThickness: number;
  $triangleColor: string;
}>`
  width: 0;
  height: 0;
  border-top: ${(props) => props.$topThickness}px solid transparent;
  border-bottom: ${(props) => props.$bottomThickness}px solid transparent;
  border-right: ${(props) =>
    `${props.$rightThickness}px solid ${props.$triangleColor}`};
`;
