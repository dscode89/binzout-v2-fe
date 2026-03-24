import { Button, TextField } from "@mui/material";
import { purpleTheme } from "../../themes/themes";
import { VerticalFlexDiv } from "../Layouts/VerticalFlexDiv";
import { VerticalFlexForm } from "../Layouts/VerticalFlexForm";
import { Paragraph } from "../Typography/Paragraph";
import { useWindowDimensions } from "../../hooks/usewindowDimensions";
import { AbsoluteWrapper } from "../containers/AbsoluteWrapper";
import { RightPointedTriangle } from "../shapes/RightPointedTriangle";
import { LeftPointedTriangle } from "../shapes/LeftPointedTriangle";

export const ImprovementsForm = () => {
  const { width } = useWindowDimensions();

  if (width > 1020) {
    return (
      <VerticalFlexDiv
        $width="50"
        $align="center"
        $justify="center"
        $paddingX="0"
        $paddingY="0"
        $backgroundColor="#000000"
        $height="100%"
      >
        <AbsoluteWrapper $bottom={0} $left={0}>
          <RightPointedTriangle
            $leftThickness={100}
            $topThickness={225}
            $bottomThickness={0}
            $triangleColor="#C1E1C1"
          />
        </AbsoluteWrapper>

        <AbsoluteWrapper $top={0} $right={0}>
          <LeftPointedTriangle
            $rightThickness={100}
            $topThickness={0}
            $bottomThickness={225}
            $triangleColor="#A7C7E7"
          />
        </AbsoluteWrapper>
        <Paragraph
          $fontSize={2}
          $fontWeight={600}
          $fontFamily="Cabin Sketch"
          $color="#FFFFFF"
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
                color: purpleTheme.palette.primary.light,
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
              width: "400px",
              fontWeight: 550,
            }}
          >
            Submit
          </Button>
        </VerticalFlexForm>
      </VerticalFlexDiv>
    );
  }
};
