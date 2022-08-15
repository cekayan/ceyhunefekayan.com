import Image from "next/image";
import profilePic from "../public/profile.jpg";
import Title from "./Title";
import Contact from "./Contact";

const Bio = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 lg:gap-y-6">
      <div className="relative h-40 w-40 rounded-full shadow-md shadow-slate-200">
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
