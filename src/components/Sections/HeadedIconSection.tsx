import { useTheme } from "@mui/material";
import { useWindowDimensions } from "../../hooks/usewindowDimensions";
import { Divider } from "../Layouts/Divider";
import { HorizontalFlexDiv } from "../Layouts/HorizontalFlexDiv";
import { VerticalFlexDiv } from "../Layouts/VerticalFlexDiv";
import { Paragraph } from "../Typography/Paragraph";

interface HeadedIconSectionProps {
  title: string;
  icons: { icon: string; iconText: string }[];
}

export const HeadedIconSection = ({ title, icons }: HeadedIconSectionProps) => {
  const { width } = useWindowDimensions();
  const purpleTheme = useTheme();

  return (
    <VerticalFlexDiv
      $justify="space-between"
      $align="center"
      $paddingX="0"
      $paddingY="0"
      $widthPixels={false}
      $width="90"
      $backgroundColor={purpleTheme.palette.primary.main}
    >
      {width > 500 ? (
        <Paragraph
          $fontSize={2}
          $fontWeight={600}
          $margin={1}
          $color="#FFFFFF"
          $fontFamily="Cabin Sketch"
        >
          {title}
        </Paragraph>
      ) : null}

      {width > 1020 ? (
        <HorizontalFlexDiv
          $widthPixels={false}
          $width="100%"
          $align="center"
          $justify="space-around"
          $paddingX="0"
          $paddingY="0"
        >
          {icons.map((i: { icon: string; iconText: string }) => {
            return (
              <VerticalFlexDiv
                $widthPixels
                $width="300px"
                $justify="center"
                $align="center"
                $paddingX="1"
                $paddingY="1"
                $marginX={1}
                $marginY={0}
              >
                <img src={i.icon} alt="an icon" width="75px" />
                <Paragraph
                  $fontSize={1}
                  $fontWeight={600}
                  $margin={0.3}
                  $color="#FFFFFF"
                  $fontFamily="Cabin Sketch"
                >
                  {i.iconText}
                </Paragraph>
              </VerticalFlexDiv>
            );
          })}
        </HorizontalFlexDiv>
      ) : (
        <>
          {icons.map((i: { icon: string; iconText: string }) => {
            return (
              <VerticalFlexDiv
                $widthPixels
                $width="300px"
                $justify="center"
                $align="center"
                $paddingX="1"
                $paddingY="1"
                $marginX={1}
                $marginY={0}
              >
                <img src={i.icon} alt="an icon" width="75px" />
                <Paragraph
                  $fontSize={1}
                  $fontWeight={600}
                  $margin={0.3}
                  $color="#FFFFFF"
                >
                  {i.iconText}
                </Paragraph>

                <Divider
                  $width={80}
                  $bgColor="#FFFFFF"
                  $marginX={1}
                  $height={1}
                />
              </VerticalFlexDiv>
            );
          })}
        </>
      )}
    </VerticalFlexDiv>
  );
};
