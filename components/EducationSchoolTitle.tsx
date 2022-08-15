interface SchoolName {
  schoolTitle: string;
}

const EducationSchoolTitle = ({ schoolTitle }: SchoolName) => {
  return (
    <h2 className="text-lg font-bold text-black dark:text-white lg:text-2xl">
      {schoolTitle}
    </h2>
  );
};

export default EducationSchoolTitle;
