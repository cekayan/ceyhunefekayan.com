import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-full flex flex-col justify-between dark:text-white dark:bg-slate-900">
      <header className="sticky z-index-50 top-0 dark:bg-slate-600 h-20 w-full dark:text-white">
        <span>HI</span>
      </header>
      {children}
    </div>
  );
};

export default Layout;
