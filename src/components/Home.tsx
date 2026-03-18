import { Hero } from "./Hero/Hero";
import { HorizontalFlexDiv } from "./Layouts/HorizontalFlexDiv";
import { HeadedIconSection } from "./Sections/HeadedIconSection";
import binImage from "../assets/Bin-1--Streamline-Ultimate.svg";
import calendarImage from "../assets/Calendar-1--Streamline-Ultimate.svg";
import moneyImage from "../assets/Money-Bag-Dollar--Streamline-Ultimate.svg";
import liverpoolBackground from "../assets/liverpool-ghibli.png";
import { InstructionsSection } from "./Sections/InstructionsSection";
import { AbsoluteWrapper } from "./containers/AbsoluteWrapper";
import { HorizontalFlexForm } from "./Layouts/HorizontalFlexForm";
import { Button, TextField, useTheme } from "@mui/material";

export const Home = () => {
  const purpleTheme = useTheme();
  return (
    <>
      <Hero img={liverpoolBackground}>
        <AbsoluteWrapper $top={100} $left={50} $center>
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
        </AbsoluteWrapper>
      </Hero>
      <HorizontalFlexDiv
        $align="center"
        $justify="center"
        $paddingX="3"
        $paddingY="3"
        $widthPixels={false}
        $width="80%"
        $centered
      >
        <HeadedIconSection
          title="Why choose Binzout?"
          icons={[
            {
              icon: binImage,
              iconText: "Track your bin schedule",
            },
            {
              icon: calendarImage,
              iconText: "Save your bin schedule",
            },
            {
              icon: moneyImage,
              iconText: "Avoid fines",
            },
          ]}
        />
      </HorizontalFlexDiv>
      <InstructionsSection />
    </>
  );
};
