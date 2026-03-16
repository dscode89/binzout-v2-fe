import { VerticalFlexDiv } from "../Layouts/VerticalFlexDiv";
import { navItems } from "../../data/navItems";
import { NavItem } from "./NavItem";

export const DrawerList = () => {
  return (
    <VerticalFlexDiv
      $widthPixels
      $width={200}
      $justify="flex-start"
      $align="left"
      $paddingX="1"
      $paddingY="0"
    >
      {navItems.map((item: string) => {
        return (
          <NavItem $marginY="1" $marginX="0">
            {item}
          </NavItem>
        );
      })}
    </VerticalFlexDiv>
  );
};
