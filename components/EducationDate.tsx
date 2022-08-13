interface EducationDateInfo {
  startYear: number | string;
  endYear: number | string;
}

const EducationDate = ({ startYear, endYear }: EducationDateInfo) => {
  return (
    <p className="text-base font-light text-gray-600 dark:text-gray-400">
      <span>{startYear}</span> - <span className="font-serif">{endYear}</span>
    </p>
  );
};

export default EducationDate;
