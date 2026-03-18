import styled from "styled-components";

export const HeroImg = styled.div<{ $img: string }>`
  max-width: 100%;
  height: 600px;
  background-image: url("${(props) => props.$img}");
  background-size: cover;
  background-position: center;
  position: relative;
`;
