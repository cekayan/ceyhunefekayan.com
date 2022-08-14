import { StaticImageData } from "next/image";

interface educationInfo {
  image: StaticImageData;
  altText: string;
  schoolTitle: string;
  positionName: string;
  startYear: string;
  endYear: string;
}

export default educationInfo;
