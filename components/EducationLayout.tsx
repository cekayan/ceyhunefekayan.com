import { PropsWithChildren } from "react";

const EducationLayout = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col">{children}</div>;
};

export default EducationLayout;
