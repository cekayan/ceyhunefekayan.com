import { FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { IconBaseProps } from "react-icons/lib";
import { SiGooglescholar } from "react-icons/si";

type SocialIconProp = JSX.IntrinsicAttributes & IconBaseProps;

const contactInfo = [
  {
    name: "Twitter",
    href: "https://twitter.com/cekayan",
    icon: (props: SocialIconProp) => <FaTwitter {...props} />,
  },
  {
    name: "Github",
    href: "https://github.com/Ceyhun-Efe-Kayan",
    icon: (props: SocialIconProp) => <FaGithub {...props} />,
  },
  {
    name: "Email",
    href: "mailto:cek99@drexel.edu",
    icon: (props: SocialIconProp) => <FaEnvelope {...props} />,
  },
  {
    name: "Google Scholar",
    href: "https://scholar.google.com/citations?user=dT5jOoUAAAAJ&hl=en&oi=ao",
    icon: (props: SocialIconProp) => <SiGooglescholar {...props} />,
  },
];

const Contact = () => {
  return (
    <ul className="flex gap-x-5">
      {contactInfo.map((item) => {
        return (
          <li key={item.name}>
            <a
              href={item.href}
              className="hover:text-sky-300 focus-visible:text-sky-300 focus-visible:ring-slate-100"
            >
              <item.icon aria-label={item.name} className="h-8 w-8" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Contact;
