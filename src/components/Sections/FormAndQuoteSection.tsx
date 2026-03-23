import { HorizontalFlexDiv } from "../Layouts/HorizontalFlexDiv";
import { VerticalFlexDiv } from "../Layouts/VerticalFlexDiv";
import { ImprovementsForm } from "../Forms/ImprovementsForm";
import { QuoteSection } from "./QuoteSection";
import { quotes } from "../../data/quotes";

export const FormAndQuoteSection = () => {
  return (
    <HorizontalFlexDiv
      $align="center"
      $justify="center"
      $paddingX="0"
      $paddingY="0"
      $width="100%"
      $height="450px"
    >
      <VerticalFlexDiv
        $width="50"
        $align="center"
        $justify="center"
        $paddingX="0"
        $paddingY="0"
        $height="100%"
      >
        <QuoteSection />
      </VerticalFlexDiv>

      <ImprovementsForm />
    </HorizontalFlexDiv>
  );
};
