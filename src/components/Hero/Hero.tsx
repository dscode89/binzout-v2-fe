import { HeroImg } from "../Images/HeroImg";

interface HeroProps {
  img: string;
  children: React.ReactNode;
}

export const Hero = ({ img, children }: HeroProps) => {
  return <HeroImg $img={img}>{children}</HeroImg>;
};
