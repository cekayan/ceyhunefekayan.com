import Image, { StaticImageData } from "next/image";

interface EducationIcon {
  image: StaticImageData;
  altText: string;
}

const EducationIcon = ({ image, altText }: EducationIcon) => {
  return (
    <figure className="h-16 w-16">
      <Image className="rounded-full" src={image} alt={altText} />
    </figure>
  );
};

export default EducationIcon;
