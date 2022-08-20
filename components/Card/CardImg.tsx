import Image, { StaticImageData } from "next/image";

interface EducationIcon {
  image: StaticImageData;
  altText: string;
}

const CardImg = ({ image, altText }: EducationIcon) => {
  return (
    <figure className="h-16 w-16 lg:h-24 lg:w-24">
      <Image className="rounded-full" src={image} alt={altText} priority />
    </figure>
  );
};

export default CardImg;
