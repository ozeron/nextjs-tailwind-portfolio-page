// ProfileImage.js
import Image from 'next/image';

const ProfileImage = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      {/* Background Main Flower */}
      <div className="absolute w-[130%] h-[130%]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 z-0">
        <Image
          src="/image/flower.png"
          alt="background shape"
          layout="fill"
          objectFit="contain"
          className="opacity-100"
        />
      </div>

      {/* Main Profile Image */}
      <div className="relative mx-auto my-auto z-10 w-[60%] sm:w-[60%] md:w-[50%] lg:w-[80%] h-auto">
        <Image
          src="/image/profile.png"
          alt="Profile"
          layout="responsive"
          width={600}
          height={833}
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      {/* Bottom Left Small Flower */}
      {/* <div className="absolute bottom-12 left-[30%] transform rotate-45 -translate-x-full w-[30%] h-[30%] z-20 flex justify-center items-center">
        <Image
          src="/image/flower.png"
          alt="Profile"
          layout="responsive"
          width={600}
          height={600}
          objectFit="cover"
        />
      </div> */}

      {/* Bottom Right Small Flower */}
      {/* <div className="absolute bottom-11 left-[42%] transform -translate-x-full w-[160px] h-[160px] z-20">
        <Image
          src="/image/flower.png"
          alt="bottom right decoration"
          layout="fill"
          objectFit="contain"
        />
      </div> */}
    </div>
  );
};

export default ProfileImage;
