interface titleInfo {
  title: string;
}

const PubTitle = ({ title }: titleInfo) => {
  return <h2 className="mb-2 text-lg font-bold">{title}</h2>;
};

export default PubTitle;
