import { HorizontalFlexDiv } from "../Layouts/HorizontalFlexDiv";
import logo from "../../assets/logo.png";
import { NavItemsContainer } from "./NavItemsContainer";

export const NavBar = () => {
  return (
    <HorizontalFlexDiv
      $justify="space-between"
      $align="center"
      $paddingX="2"
      $paddingY="1"
    >
      <img src={logo} alt="binzout-logo" width="120px" />
      <NavItemsContainer />
    </HorizontalFlexDiv>
  );
};
