import linksInfo from "./linksInfo";
import author from "./author";

interface publicationInfo {
  abstract: string;
  title: string;
  authors: author[];
  year: number;
  links: linksInfo[];
}

export default publicationInfo;
