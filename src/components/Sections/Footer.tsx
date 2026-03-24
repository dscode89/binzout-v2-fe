import { HorizontalFlexDiv } from "../Layouts/HorizontalFlexDiv";
import { Paragraph } from "../Typography/Paragraph";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

export const Footer = () => {
  return (
    <HorizontalFlexDiv
      $width="100"
      $justify="space-between"
      $align="center"
      $paddingX="1"
      $paddingY="1"
      $backgroundColor="#2e2e33"
      $color="#FFFFFF"
    >
      <Paragraph $color="#FFFFFF" $fontSize={1} $fontWeight={400}>
        created by @dscode89
      </Paragraph>

      <HorizontalFlexDiv
        $widthPixels
        $width="auto"
        $justify="space-between"
        $align="center"
        $paddingX="0"
        $paddingY="0"
      >
        <IconButton>
          <GitHubIcon fontSize="large" color="primary" />
        </IconButton>

        <IconButton>
          <LinkedInIcon fontSize="large" color="primary" />
        </IconButton>
      </HorizontalFlexDiv>
    </HorizontalFlexDiv>
  );
};
