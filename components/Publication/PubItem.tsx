import Abstract from "./Abstract";
import PubAuthors from "./PubAuthors";
import PubLinks from "./PubLinks";
import PubTitle from "./PubTitle";
import PubYear from "./PubYear";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import publicationInfo from "../../interfaces/publicationInfo";
import PubDisclosure from "./PubDisclosure";

const PublicationItem = ({
  abstract,
  title,
  year,
  authors,
  links,
}: publicationInfo) => {
  return (
    <section>
      <PubYear year={year} />
      <PubTitle title={title} />
      <PubAuthors authors={authors} />
      <PubLinks allLinks={links} />
    </section>
  );
};

export default PublicationItem;
