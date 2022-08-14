import type author from "../../interfaces/author";

interface authorsInfo {
  authors: author[];
}

const PubAuthors = ({ authors }: authorsInfo): JSX.Element => {
  return (
    <ul className="flex flex-wrap gap-x-1 text-sm mb-2">
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
