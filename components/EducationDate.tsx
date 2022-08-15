interface EducationDateInfo {
  startYear: number | string;
  endYear: number | string;
}

const EducationDate = ({ startYear, endYear }: EducationDateInfo) => {
  return (
    <p className="text-base font-light text-gray-600 dark:text-gray-300 lg:text-lg">
      <span>{startYear}</span> -{" "}
      <span
        className={`${
          endYear === "current" ? "font-sans text-lg capitalize" : ""
        }`}
      >
        {endYear}
      </span>
    </p>
  );
};

export default EducationDate;
