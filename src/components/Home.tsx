import { Hero } from "./Hero/Hero";
import backgroundImg from "../assets/asia.jpg";
import { HorizontalFlexDiv } from "./Layouts/HorizontalFlexDiv";
import { HeadedIconSection } from "./Sections/HeadedIconSection";
import binImage from "../assets/Bin-1--Streamline-Ultimate.svg";
import calendarImage from "../assets/Calendar-1--Streamline-Ultimate.svg";
import moneyImage from "../assets/Money-Bag-Dollar--Streamline-Ultimate.svg";
import liverpoolBackground from "../assets/liverpool-ghibli.png";
import { InstructionsSection } from "./Sections/InstructionsSection";

export const Home = () => {
  return (
    <>
      <Hero img={liverpoolBackground} />
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
