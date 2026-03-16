import styled from "styled-components";

export const NavItem = styled.a<{ $marginX: string }>`
  margin: 0 ${(props) => props.$marginX}em;
`;
