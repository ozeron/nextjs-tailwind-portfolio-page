"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import ProfileImage from "@/components/profile-image";

function Hero() {
  return (
    <header
      className="bg-blue-400 p-8"
      style={{
        backgroundImage: 'url(/image/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="container mx-auto grid h-full gap-4 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl text-yellow-800"
            placeholder="abc"
          >
            👋 Привіт, я Марина  <br />
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-800 md:pr-16 xl:pr-28"
            placeholder="abc"
          >
            Сертифікований бізнес тренер та кар'єрний консультант.
          </Typography>
        </div>
        <div className="w-full h-full">
          <ProfileImage />
        </div>
      </div>
    </header>
  );
}

export default Hero;
