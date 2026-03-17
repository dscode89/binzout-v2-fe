import styled from "styled-components";

export const Image = styled.img<{ $rotate?: number }>`
  transform: ${(props) =>
    props.$rotate ? `rotate(${props.$rotate}deg)` : "rotate(0)"};
`;
