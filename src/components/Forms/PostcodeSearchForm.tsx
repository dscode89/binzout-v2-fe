import { Button, TextField, useTheme } from "@mui/material";
import { HorizontalFlexForm } from "../Layouts/HorizontalFlexForm";

export const PostcodeSearchForm = () => {
  const purpleTheme = useTheme();
  return (
    <HorizontalFlexForm
      $justify="center"
      $align="center"
      $paddingX="0.5"
      $paddingY="0.5"
      $widthPixels
      $width="auto"
      $backgroundColor="rgba(0, 0, 0, 0.2)"
      $borderRadius={5}
      $applyBorder
      $borderWidth={3}
      $borderStyle="solid"
      $borderColor={purpleTheme.palette.primary.main}
      $blur
    >
      <TextField id="postcode-entry" label="Enter Postcode" />
      <Button>Search</Button>
    </HorizontalFlexForm>
  );
};
