import { StaticImageData } from "next/image";

interface EducationInfo {
  image: StaticImageData;
  altText: string;
  schoolTitle: string;
  positionName: string;
  startYear: string;
  endYear: string;
}

export default EducationInfo;
