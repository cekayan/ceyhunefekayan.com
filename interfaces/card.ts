import { StaticImageData } from "next/image";

interface CardType {
  image: StaticImageData;
  altText: string;
  title: string;
  content: string;
  startDate: string;
  endDate: string;
}

export default CardType;
