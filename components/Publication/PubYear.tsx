interface yearInfo {
  year: number;
}

const PubYear = ({ year }: yearInfo) => {
  return (
    <p className="mb-2">
      <span className="rounded-xl bg-sky-400/75 p-1 text-black">{year}</span>
    </p>
  );
};

export default PubYear;
