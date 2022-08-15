import educationInfo from "../interfaces/education";
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
}: educationInfo) => {
  return (
    <section className="flex items-center gap-x-2 rounded-md py-3">
      <div className="flex p-2">
        <EducationIcon image={image} altText={altText} />
      </div>
      <div className="flex w-full flex-col ">
        <div className="">
          <EducationSchoolTitle schoolTitle={schoolTitle} />
          <EducationSchoolPosition positionName={positionName} />
          <EducationDate startYear={startYear} endYear={endYear} />
        </div>
      </div>
    </section>
  );
};

export default EducationItem;
