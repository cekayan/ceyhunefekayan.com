import { FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const contactInfo = [
  {
    name: "Twitter",
    href: "",
    icon: () => <FaTwitter />,
  },
  {
    name: "Github",
    href: "",
    icon: () => <FaGithub />,
  },
  {
    name: "Email",
    href: "",
    icon: () => <FaEnvelope />,
  },
  {
    name: "Google Scholar",
    href: "",
    icon: () => <SiGooglescholar />,
  },
];

const Contact = () => {
  return (
    <ul>
      {contactInfo.map(({ name, href, icon }) => {
        return (
          <li key={name}>
            <a href={href}>icon()</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Contact;
