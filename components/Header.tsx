import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed z-50 top-0 bg-slate-700 h-20 w-full dark:text-white">
      <ul>
        <li>
          <Link href="/#education">
            <a>Education</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
