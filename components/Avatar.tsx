import Image from "next/image";
import profilePic from "../public/profile.jpg";
import Title from "./Title";

const Avatar = () => {
  return (
    <>
      <div className="w-40 h-40 relative rounded-full shadow-md shadow-slate-200">
        <Image
          className="rounded-full"
          objectFit="cover"
          layout="fill"
          src={profilePic}
          alt="Ceyhun Efe Kayan's profile picture"
        />
      </div>
      <Title />
    </>
  );
};

export default Avatar;
