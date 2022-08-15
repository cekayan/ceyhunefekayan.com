interface EducationPosition {
  positionName: string;
}

const EducationSchoolPosition = ({ positionName }: EducationPosition) => {
  return (
    <p className="text-base font-normal text-black dark:text-white lg:text-lg">
      {positionName}
    </p>
  );
};

export default EducationSchoolPosition;
