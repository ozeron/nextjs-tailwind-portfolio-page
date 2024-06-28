"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header
      className="bg-blue-400 p-8"
      style={{
        backgroundImage: 'url(/image/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl text-yellow-700"
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
          <div className="grid">
            {/* <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
              placeholder="abc"
            >
              Твій імейл
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              {/* <Input color="gray" label="Введи свій імейл" size="lg" />
              <Button color="gray" className="w-full px-4 md:w-[12rem]" placeholder="abc">
                записатися на звінок
              </Button>
            </div> */}
          </div>
          {/* <Typography variant="small" className="font-normal !text-gray-500" placeholder="abc">
            Прочитай мої{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography> */}
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/Square.jpg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
