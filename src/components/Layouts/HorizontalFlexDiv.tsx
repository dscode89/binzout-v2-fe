import styled from "styled-components";

export const HorizontalFlexDiv = styled.div<{
  $justify: string;
  $align: string;
  $padding: string;
  $marginX?: number;
  $marginY?: number;
}>`
  display: flex;
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};
  padding: ${(props) => props.$padding}em;
  margin: ${(props) =>
    props.$marginX && props.$marginY
      ? `${props.$marginX} ${props.$marginY}`
      : null};
  border: 1px solid red;
`;
