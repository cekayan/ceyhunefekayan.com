interface EducationDateInfo {
  startYear: number | string;
  endYear: number | string;
}

const CardDate = ({ startYear, endYear }: EducationDateInfo) => {
  return (
    <p className="text-base font-light text-gray-300 lg:text-lg">
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

export default CardDate;
