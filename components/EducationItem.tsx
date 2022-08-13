import EducationInfo from "../interfaces/education";
import EducationDate from "./EducationDate";
import EducationIcon from "./EducationIcon";
import EducationSchoolPosition from "./EducationSchoolPosition";
import EducationSchoolTitle from "./EducationSchoolTitle";

const EducationItem = ({
  image,
  altText,
  schoolTitle,
  positionName,
  startYear,
  endYear,
}: EducationInfo) => {
  return (
    <section className="flex rounded-md py-3 gap-x-2">
      <div className="flex p-2">
        <EducationIcon image={image} altText={altText} />
      </div>
      <div className="flex flex-col w-full ">
        <div className="text-justify">
          <EducationSchoolTitle schoolTitle={schoolTitle} />
          <EducationSchoolPosition positionName={positionName} />
          <EducationDate startYear={startYear} endYear={endYear} />
        </div>
      </div>
    </section>
  );
};

export default EducationItem;
