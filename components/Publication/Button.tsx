interface buttonType {
  name: string;
  href: string;
}

const Button = ({ name, href }: buttonType) => {
  return (
    <a
      href={href}
      className="rounded-md bg-indigo-500 px-2 py-1 text-white underline underline-offset-1 hover:ring hover:ring-indigo-200/75 focus:outline-none focus-visible:ring focus-visible:ring-indigo-200/75 lg:p-2 lg:text-xl lg:underline-offset-2"
    >
      {name}
    </a>
  );
};

export default Button;
