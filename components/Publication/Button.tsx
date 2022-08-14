interface buttonType {
  name: string;
  href: string;
}

const Button = ({ name, href }: buttonType) => {
  return (
    <button className="rounded-md bg-indigo-500 px-2 py-1 underline underline-offset-1 hover:ring hover:ring-indigo-200/75 focus:outline-none focus-visible:ring focus-visible:ring-indigo-200/75">
      <a href={href} className="text-white">
        {name}
      </a>
    </button>
  );
};

export default Button;
