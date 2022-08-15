interface titleInfo {
  title: string;
}

const PubTitle = ({ title }: titleInfo) => {
  return (
    <h2 className="mb-2 text-lg font-bold lg:mb-4 lg:text-2xl">{title}</h2>
  );
};

export default PubTitle;
