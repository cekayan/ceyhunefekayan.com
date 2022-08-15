import type author from "../../interfaces/author";

interface authorsInfo {
  authors: author[];
}

const PubAuthors = ({ authors }: authorsInfo): JSX.Element => {
  return (
    <ul className="mb-4 flex flex-wrap gap-x-1 text-sm lg:mb-6 lg:text-base">
      {authors.map(({ name }, idx) =>
        idx === authors.length - 1 ? (
          <li key={name}>{name}</li>
        ) : (
          <li key={name}>{name}, </li>
        )
      )}
    </ul>
  );
};

export default PubAuthors;
