import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 h-20 w-full bg-slate-700 dark:text-white">
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
