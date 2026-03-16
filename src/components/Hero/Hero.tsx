import { HeroImg } from "../images/HeroImg";

interface HeroProps {
  img: string;
}

export const Hero = ({ img }: HeroProps) => {
  return <HeroImg $img={img} />;
};
