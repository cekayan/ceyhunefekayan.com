import Card from "./Card/Card";
import Heading1 from "./Heading1";
import miralabIcon from "../public/icons/miralab.png";
import adessoIcon from "../public/icons/adesso.jpeg";
import insigmaIcon from "../public/icons/insigma.jpeg";
import ExperienceType from "../interfaces/experience";

const experienceList: ExperienceType[] = [
  {
    jobTitle: "Research Internship",
    companyName: "MIRALAB - IZTECH EEE",
    startDate: "Jul 2021",
    endDate: "Jul 2022",
    altText: "Icon of MIRALAB at IZTECH",
    image: miralabIcon,
  },
  {
    jobTitle: "Part Time R&D Engineer",
    companyName: "adesso Turkey",
    startDate: "Oct 2021",
    endDate: "Jun 2022",
    altText: "Icon of adesso Turkey",
    image: adessoIcon,
  },
  {
    jobTitle: "R&D Intern",
    companyName: "adesso Turkey",
    startDate: "Jul 2021",
    endDate: "Aug 2021",
    altText: "Icon of adesso Turkey",
    image: adessoIcon,
  },
  {
    jobTitle: "Internship",
    companyName: "Insigma Engineering",
    startDate: "Jul 2021",
    endDate: "Aug 2021",
    altText: "Icon of Insigma Engineering",
    image: insigmaIcon,
  },
];

const Experience = () => {
  return (
    <section>
      <Heading1>Experience</Heading1>
      <ul className="flex flex-col items-center gap-y-4 px-4">
        {experienceList.map(
          ({ jobTitle, companyName, startDate, endDate, altText, image }) => (
            <li key={startDate + altText} className="w-full sm:max-w-lg">
              <Card
                image={image}
                altText={altText}
                title={companyName}
                content={jobTitle}
                startDate={startDate}
                endDate={endDate}
              />
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default Experience;
