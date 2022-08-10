import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between gap-y-8 dark:bg-slate-900 dark:text-white ">
      {children}
    </div>
  );
};

export default Layout;
