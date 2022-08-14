interface yearInfo {
  year: number;
}

const PubYear = ({ year }: yearInfo) => {
  return (
    <p className="mb-2">
      <span className="bg-sky-400/75 text-black rounded-xl p-1">{year}</span>
    </p>
  );
};

export default PubYear;
