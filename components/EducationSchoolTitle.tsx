interface SchoolName {
  schoolTitle: string;
}

const EducationSchoolTitle = ({ schoolTitle }: SchoolName) => {
  return (
    <h2 className="text-lg font-bold text-black dark:text-white">
      {schoolTitle}
    </h2>
  );
};

export default EducationSchoolTitle;
