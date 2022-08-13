import { PropsWithChildren } from "react";

const Heading1 = ({ children }: PropsWithChildren) => {
  return <h1 className="text-center text-4xl mb-8">{children}</h1>;
};

export default Heading1;
