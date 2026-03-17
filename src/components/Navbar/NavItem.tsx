import styled from "styled-components";

export const NavItem = styled.a<{ $marginX: string; $marginY: string }>`
  margin: ${(props) => props.$marginY}em ${(props) => props.$marginX}em;
  cursor: pointer;
  text-decoration: none;
  color: black;

  &:hover {
    color: #966fd6;
  }
`;
