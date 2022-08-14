import { PropsWithChildren } from "react";

const Heading1 = ({ children }: PropsWithChildren) => {
  return <h1 className="mb-8 text-center text-4xl">{children}</h1>;
};

export default Heading1;
