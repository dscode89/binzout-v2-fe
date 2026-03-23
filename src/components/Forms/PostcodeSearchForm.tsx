import { Button, TextField, useTheme } from "@mui/material";
import { HorizontalFlexForm } from "../Layouts/HorizontalFlexForm";
import { useWindowDimensions } from "../../hooks/usewindowDimensions";
import { VerticalFlexDiv } from "../Layouts/VerticalFlexDiv";

export const PostcodeSearchForm = () => {
  const purpleTheme = useTheme();
  const { width } = useWindowDimensions();

  return (
    <HorizontalFlexForm
      $justify="center"
      $align="center"
      $paddingX="1"
      $paddingY="1"
      $widthPixels
      $width="auto"
      $backgroundColor="rgba(255, 255, 255, 0.8)"
      $borderRadius={5}
      $applyBorder
      $borderWidth={3}
      $borderStyle="solid"
      $borderColor={purpleTheme.palette.primary.dark}
      $blur
    >
      {width > 565 ? (
        <>
          <TextField
            id="postcode-entry"
            label="Enter Postcode"
            required
            autoComplete="off"
            sx={{
              "& .MuiInputBase-root": {
                height: "55px",
                width: "200px",
                color: purpleTheme.palette.primary.dark,
                borderColor: purpleTheme.palette.primary.dark,

                "& fieldset": {
                  borderColor: purpleTheme.palette.primary.main,
                },

                "&.Mui-focused fieldset": {
                  borderColor: purpleTheme.palette.primary.dark,
                },

                "&:hover fieldset": {
                  borderColor: purpleTheme.palette.primary.dark,
                },
              },

              "& .MuiFormLabel-root": {
                color: purpleTheme.palette.primary.dark,
              },

              "& .MuiInputLabel-outlined": {
                color: purpleTheme.palette.primary.dark,
              },

              "& .MuiOutlinedInput-input": {
                color: purpleTheme.palette.primary.dark,
              },
            }}
          />
          <Button
            type="submit"
            sx={{
              color: "#FFFFFF",
              backgroundColor: purpleTheme.palette.primary.dark,
              margin: "0em 1em",
              height: "55px",
              width: "100px",
            }}
          >
            Search
          </Button>
        </>
      ) : (
        <VerticalFlexDiv
          $align=""
          $justify="center"
          $paddingX="1"
          $paddingY="1"
          $widthPixels
          $width="auto"
          $backgroundColor="transparent"
        >
          <TextField
            id="postcode-entry"
            label="Enter Postcode"
            required
            autoComplete="off"
            sx={{
              "& .MuiInputBase-root": {
                height: "55px",
                width: "200px",
                color: purpleTheme.palette.primary.dark,
                borderColor: purpleTheme.palette.primary.dark,

                "& fieldset": {
                  borderColor: purpleTheme.palette.primary.main,
                },

                "&.Mui-focused fieldset": {
                  borderColor: purpleTheme.palette.primary.dark,
                },

                "&:hover fieldset": {
                  borderColor: purpleTheme.palette.primary.dark,
                },
              },

              "& .MuiFormLabel-root": {
                color: purpleTheme.palette.primary.dark,
              },

              "& .MuiInputLabel-outlined": {
                color: purpleTheme.palette.primary.dark,
              },
              "& .MuiOutlinedInput-input": {
                color: purpleTheme.palette.primary.dark,
              },
            }}
          />
          <Button
            type="submit"
            sx={{
              color: "#FFFFFF",
              backgroundColor: purpleTheme.palette.primary.dark,
              height: "55px",
              marginTop: "1em",
              width: "200px",
            }}
          >
            Search
          </Button>
        </VerticalFlexDiv>
      )}
    </HorizontalFlexForm>
  );
};
