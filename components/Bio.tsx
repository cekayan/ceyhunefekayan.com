import Image from "next/image";
import profilePic from "../public/profile.jpg";
import Title from "./Title";
import Contact from "./Contact";

const Bio = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="w-40 h-40 relative rounded-full shadow-md shadow-slate-200">
        <Image
          className="rounded-full"
          objectFit="cover"
          layout="fill"
          src={profilePic}
          alt="Ceyhun Efe Kayan's profile picture"
          priority
        />
      </div>
      <Title />
      <Contact />
    </div>
  );
};

export default Bio;
