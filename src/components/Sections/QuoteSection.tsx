import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { quotes } from "../../data/quotes";
import { VerticalFlexDiv } from "../Layouts/VerticalFlexDiv";
import { Paragraph } from "../Typography/Paragraph";
import { purpleTheme } from "../../themes/themes";
import backgroundBinImg from "../../assets/Bin-1--Streamline-Ultimate.svg";

export const QuoteSection = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
      loop: true,
    },
    [
      (slider) => {
        let intervalNum: number;
        slider.on("created", () => {
          intervalNum = setInterval(() => {
            slider.next();
          }, 7000);
        });
        slider.on("destroyed", () => {
          if (intervalNum) {
            clearInterval(intervalNum);
          }
        });
      },
    ],
  );
  return (
    <div ref={sliderRef} className="keen-slider">
      {quotes.map((q) => {
        return (
          <VerticalFlexDiv
            key={q.quoteId}
            $width="auto"
            $align="center"
            $justify="center"
            $paddingX="10"
            $paddingY="1"
            className="keen-slider__slide"
            $height="100%"
            $backgroundImg={backgroundBinImg}
          >
            <Paragraph
              $color="#000000"
              $fontSize={1.6}
              $fontWeight={500}
              $fontFamily="Cabin Sketch"
            >
              <span
                style={{
                  color: purpleTheme.palette.primary.dark,
                  fontWeight: 800,
                }}
              >
                "
              </span>
              {q.quote}
              <span
                style={{
                  color: purpleTheme.palette.primary.dark,
                  fontWeight: 800,
                }}
              >
                "
              </span>
            </Paragraph>

            <Paragraph
              $color="#000000"
              $fontSize={1}
              $fontWeight={500}
              $fontFamily="Cabin Sketch"
              $margin={1}
            >
              {q.orator}
            </Paragraph>
          </VerticalFlexDiv>
        );
      })}
    </div>
  );
};
