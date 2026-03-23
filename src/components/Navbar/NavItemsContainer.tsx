import { HorizontalFlexDiv } from "../Layouts/HorizontalFlexDiv";
import { NavItem } from "./NavItem";
import { navItems } from "../../data/navItems";
import { useWindowDimensions } from "../../hooks/usewindowDimensions";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import { DrawerList } from "./DrawerList";

export const NavItemsContainer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const { width } = useWindowDimensions();

  if (width < 750) {
    return (
      <>
        <IconButton
          onClick={() => {
            setOpenDrawer(true);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          open={openDrawer}
          anchor="right"
          role="presentation"
          onClose={() => setOpenDrawer(false)}
        >
          <DrawerList />
        </Drawer>
      </>
    );
  }

  return (
    <HorizontalFlexDiv
      $justify="space-between"
      $align="center"
      $paddingX="1"
      $paddingY="1"
      $widthPixels={false}
      $width="auto"
    >
      {navItems.map((i: { item: string; itemId: number }) => {
        return (
          <NavItem key={i.itemId} $marginX="1" $marginY="0" href={`/${i.item}`}>
            {i.item}
          </NavItem>
        );
      })}
    </HorizontalFlexDiv>
  );
};
