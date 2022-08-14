import Heading1 from "./Heading1";
import EducationItem from "./EducationItem";
import drexelIcon from "../public/school-icons/drexel.jpeg";
import iztechIcon from "../public/school-icons/iztech.jpeg";
import educationInfo from "../interfaces/education";

const educationList: educationInfo[] = [
  {
    schoolTitle: "Drexel University",
    positionName: "PhD Student in Computer Woopsies",
    startYear: "2022",
    endYear: "current",
    image: drexelIcon,
    altText: "haha funny image",
  },
  {
    schoolTitle: "Izmir Institute of Technology",
    positionName: "Undergrad in everything",
    startYear: "2018",
    endYear: "2022",
    image: iztechIcon,
    altText: "haha more funny image lol xd",
  },
];

const EducationSection = () => {
  return (
    <section>
      <Heading1>Education</Heading1>
      <ul className="flex flex-col gap-y-4 px-4">
        {educationList.map(
          ({
            schoolTitle,
            positionName,
            image,
            altText,
            startYear,
            endYear,
          }) => {
            return (
              <li key={positionName} className="">
                <EducationItem
                  schoolTitle={schoolTitle}
                  positionName={positionName}
                  image={image}
                  altText={altText}
                  startYear={startYear}
                  endYear={endYear}
                />
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

export default EducationSection;
