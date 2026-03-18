import { HorizontalFlexDiv } from "../Layouts/HorizontalFlexDiv";
import { Paragraph } from "../Typography/Paragraph";
import rightArrow from "../../assets/Controls-Forward--Streamline-Ultimate.svg";
import { useWindowDimensions } from "../../hooks/usewindowDimensions";
import { VerticalFlexDiv } from "../Layouts/VerticalFlexDiv";
import { Image } from "../Images/Image";

export const InstructionsSection = () => {
  const { width } = useWindowDimensions();

  if (width > 1020) {
    return (
      <HorizontalFlexDiv
        $align="center"
        $justify="center"
        $paddingX="5"
        $paddingY="5"
        $widthPixels={false}
        $width="100%"
        $backgroundColor="#cfaad3"
      >
        <Paragraph
          $fontSize={2}
          $fontWeight={600}
          $margin={1}
          $color={"#FFFFFF"}
          $fontFamily="Cabin Sketch"
        >
          Enter your postcode
        </Paragraph>

        <img src={rightArrow} alt="right arrow icon" width="60px" />

        <Paragraph
          $fontSize={2}
          $fontWeight={600}
          $margin={1}
          $color="#FFFFFF"
          $fontFamily="Cabin Sketch"
        >
          View Your Bin Schedule
        </Paragraph>

        <img src={rightArrow} alt="right arrow icon" width="60px" />

        <Paragraph
          $fontSize={2}
          $fontWeight={600}
          $margin={1}
          $color="#FFFFFF"
          $fontFamily="Cabin Sketch"
        >
          Add it to your calendar
        </Paragraph>
      </HorizontalFlexDiv>
    );
  }
  return (
    <VerticalFlexDiv
      $align="center"
      $justify="center"
      $paddingX="5"
      $paddingY="5"
      $widthPixels={false}
      $width={100}
      $backgroundColor="#cfaad3"
    >
      <Paragraph
        $fontSize={2}
        $fontWeight={600}
        $margin={1}
        $color={"#FFFFFF"}
        $fontFamily="Cabin Sketch"
      >
        Enter your postcode
      </Paragraph>

      <Image
        src={rightArrow}
        alt="right arrow icon"
        width="60px"
        $rotate={90}
      />

      <Paragraph
        $fontSize={2}
        $fontWeight={600}
        $margin={1}
        $color="#FFFFFF"
        $fontFamily="Cabin Sketch"
      >
        View Your bin schedule
      </Paragraph>

      <Image
        src={rightArrow}
        alt="right arrow icon"
        width="60px"
        $rotate={90}
      />

      <Paragraph
        $fontSize={2}
        $fontWeight={600}
        $margin={1}
        $color="#FFFFFF"
        $fontFamily="Cabin Sketch"
      >
        Add it to your calendar
      </Paragraph>
    </VerticalFlexDiv>
  );
};
