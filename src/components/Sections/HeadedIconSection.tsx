import { useWindowDimensions } from "../../hooks/usewindowDimensions";
import { HorizontalFlexDiv } from "../Layouts/HorizontalFlexDiv";
import { VerticalFlexDiv } from "../Layouts/VerticalFlexDiv";
import { Paragraph } from "../Typography/Paragraph";

interface HeadedIconSectionProps {
  title: string;
  icons: { icon: string; iconText: string }[];
}

export const HeadedIconSection = ({ title, icons }: HeadedIconSectionProps) => {
  const { width } = useWindowDimensions();

  return (
    <VerticalFlexDiv
      $justify="space-between"
      $align="center"
      $paddingX="0"
      $paddingY="0"
      $widthPixels={false}
      $width={90}
    >
      {width > 500 ? (
        <Paragraph $fontSize={1.7} $fontWeight={500} $margin={1}>
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
                $width={300}
                $justify="center"
                $align="center"
                $paddingX="1"
                $paddingY="1"
                $marginX={1}
                $marginY={0}
              >
                <img src={i.icon} alt="an icon" width="75px" />
                <Paragraph $fontSize={1} $fontWeight={700} $margin={0.3}>
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
                $width={300}
                $justify="center"
                $align="center"
                $paddingX="1"
                $paddingY="1"
                $marginX={1}
                $marginY={0}
              >
                <img src={i.icon} alt="an icon" width="75px" />
                <Paragraph $fontSize={1} $fontWeight={700} $margin={0.3}>
                  {i.iconText}
                </Paragraph>
              </VerticalFlexDiv>
            );
          })}
        </>
      )}
    </VerticalFlexDiv>
  );
};
