interface titleInfo {
  title: string;
}

const PubTitle = ({ title }: titleInfo) => {
  return <h2 className="font-bold text-lg mb-2">{title}</h2>;
};

export default PubTitle;
