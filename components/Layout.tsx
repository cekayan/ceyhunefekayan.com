import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-full w-full flex-col justify-between dark:bg-slate-900 dark:text-white">
      <header className="sticky top-0 z-50 h-20 w-full dark:bg-slate-600 dark:text-white">
        <span>HI</span>
      </header>
      {children}
    </div>
  );
};

export default Layout;
