import Image from "next/image";
import { FC } from "react";

interface ProfilePicProps {}

const ProfilePic: FC<ProfilePicProps> = ({}) => {
  return (
    <div className="">
      <Image
        alt="Sameer Singh"
        src="/images/profile.jpg"
        height={100}
        width={100}
        className="object-cover border-4 border-white rounded-full shadow-md h-[150px] w-[150px]"
      />
    </div>
  );
};

export default ProfilePic;
