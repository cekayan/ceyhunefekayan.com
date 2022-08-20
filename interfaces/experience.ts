import { StaticImageData } from "next/image";

interface ExperienceType {
  image: StaticImageData;
  altText: string;
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
}

export default ExperienceType;
