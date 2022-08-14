import linksInfo from "../../interfaces/linksInfo";
import Button from "./Button";

interface propType {
  allLinks: linksInfo[];
}

const PubLinks = (props: propType) => {
  return (
    <ul className="mb-2">
      {props.allLinks.map(({ name, href }) => (
        <li key={href + name}>
          <Button href={href} name={name} />
        </li>
      ))}
    </ul>
  );
};

export default PubLinks;
