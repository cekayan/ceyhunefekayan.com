import Heading1 from "./Heading1";
import Card from "./Card/Card";
import drexelIcon from "../public/icons/drexel.png";
import iztechIcon from "../public/icons/iztech.jpeg";
import CardType from "../interfaces/education";

const educationList: CardType[] = [
  {
    schoolTitle: "Drexel University",
    positionName: "PhD Student in Department of ECE",
    startYear: "2022",
    endYear: "current",
    image: drexelIcon,
    altText: "Logo of Drexel University",
  },
  {
    schoolTitle: "Izmir Institute of Technology",
    positionName: "BSc Electronics and Communications Engineering",
    startYear: "2018",
    endYear: "2022",
    image: iztechIcon,
    altText: "Logo of Izmir Institute of Technology",
  },
];

const EducationSection = () => {
  return (
    <section>
      <Heading1>Education</Heading1>
      <ul className="flex flex-col items-center gap-y-4 px-4">
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
              <li key={positionName} className="w-full sm:max-w-lg">
                <Card
                  title={schoolTitle}
                  content={positionName}
                  image={image}
                  altText={altText}
                  startDate={startYear}
                  endDate={endYear}
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
