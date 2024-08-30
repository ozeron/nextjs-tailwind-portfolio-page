// ProfileImage.js
import Image from 'next/image';

const ProfileImage = () => {
  return (
    <div className="relative w-full h-[800px] flex justify-center items-center">
      {/* Background Main Flower */}
      <div className="absolute w-[800px] h-[800px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 z-0">
        <Image
          src="/image/flower.png"
          alt="background shape"
          layout="fill"
          objectFit="contain"
          className="opacity-100"
        />
      </div>

      {/* Main Profile Image */}
      <div className="relative z-10 ">
        <div className="relative mx-auto z-10 w-[400px] h-[600px]">
          <Image
            // height={833}
            // width={600}
            src="/image/profile.png"
            alt="Profile"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Bottom Left Small Flower */}
      <div className="absolute bottom-11 left-[30%] transform rotate-45 -translate-x-full w-[160px] h-[160px] z-20 flex justify-center items-center">
        <div className='relative w-[80px] h-[80px]'>
          <Image
            src="/image/flower.png"
            alt="bottom left decoration"
            layout="fill"
            objectFit="contain"
          />
        </div>

      </div>

      {/* Bottom Right Small Flower */}
      <div className="absolute bottom-11 left-[42%] transform -translate-x-full w-[160px] h-[160px] z-20">
        <Image
          src="/image/flower.png"
          alt="bottom right decoration"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
