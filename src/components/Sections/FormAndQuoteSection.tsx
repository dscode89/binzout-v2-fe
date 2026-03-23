import { Button, TextField } from "@mui/material";
import { useWindowDimensions } from "../../hooks/usewindowDimensions";
import { HorizontalFlexDiv } from "../Layouts/HorizontalFlexDiv";
import { VerticalFlexDiv } from "../Layouts/VerticalFlexDiv";
import { VerticalFlexForm } from "../Layouts/VerticalFlexForm";
import { purpleTheme } from "../../themes/themes";
import { Paragraph } from "../Typography/Paragraph";

export const FormAndQuoteSection = () => {
  const { width } = useWindowDimensions();

  if (width > 1020) {
    return (
      <HorizontalFlexDiv
        $align="center"
        $justify="center"
        $paddingX="0"
        $paddingY="0"
        $width="100%"
      >
        <VerticalFlexDiv
          $width="50"
          $align="center"
          $justify="center"
          $paddingX="0"
          $paddingY="0"
          $backgroundColor="red"
        ></VerticalFlexDiv>

        <VerticalFlexDiv
          $width="50"
          $align="center"
          $justify="center"
          $paddingX="3"
          $paddingY="3"
          $backgroundColor="#000000"
        >
          <Paragraph
            $fontSize={2}
            $fontWeight={600}
            $fontFamily="Cabin Sketch"
            $color={purpleTheme.palette.primary.dark}
            $margin={1}
          >
            How can we improve this page?
          </Paragraph>
          <VerticalFlexForm
            $width="auto"
            $align="center"
            $justify="center"
            $paddingX="0"
            $paddingY="0"
          >
            <TextField
              id="postcode-entry"
              label="Leave some feedback..."
              required
              autoComplete="off"
              multiline
              rows={7}
              sx={{
                width: "400px",
                "& .MuiInputBase-root": {
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
                color: "#000000",
                backgroundColor: purpleTheme.palette.primary.dark,
                height: "55px",
                marginTop: "1em",
                width: "400px",
              }}
            >
              Submit
            </Button>
          </VerticalFlexForm>
        </VerticalFlexDiv>
      </HorizontalFlexDiv>
    );
  }
};
