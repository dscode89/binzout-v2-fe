import { HorizontalFlexDiv } from "../Layouts/HorizontalFlexDiv";
import { NavItem } from "./NavItem";
import { navItems } from "../../data/navItems";

export const NavItemsContainer = () => {
  return (
    <HorizontalFlexDiv $justify="space-between" $align="center" $padding="1">
      {navItems.map((item: string) => {
        return <NavItem $marginX="1">{item}</NavItem>;
      })}
    </HorizontalFlexDiv>
  );
};
