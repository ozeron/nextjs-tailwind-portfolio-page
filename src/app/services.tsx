"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development:",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      " I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children:
      "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.",
  },
  {
    icon: HashtagIcon,
    title: " Web Optimization",
    children:
      "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  },
  {
    icon: EyeIcon,
    title: "User-Centric Design",
    children:
      "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children:
      "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  },
];

export function Services() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        {/* <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography> */}
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Що я роблю
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </Typography>
      </div>
      <div className="px-8 grid grid-cols-1 md:grid-cols-10">
        <Typography variant="lead" className="col-span-3 mx-auto mb-5 text-left">
          Пакетні консультації
        </Typography>
        <Typography variant="paragraph" className="col-span-7 mx-auto mb-20 text-left">
          Я проводжу консультації з метою, щоб клієнти не тільки розвивалися професійно, а й отримували задоволення від своєї роботи, заробляли більше та були щасливішими.
          Допоможу поставити цілі, зрозуміти свої сильні сторони та зони росту, знайти цікаві шляхи для розвитку.
        </Typography>
      </div>
      <div className="px-8 grid grid-cols-1 md:grid-cols-10">
        <Typography variant="lead" className="col-span-3 mx-auto mb-5 text-left">
          Персональні консультації
        </Typography>
        <div className="col-span-7 mx-auto mb-20 text-left">
          <Typography variant="paragraph" className="mb-5">
            Я проводжу консультації з метою, щоб клієнти не тільки розвивалися професійно, а й отримували задоволення від своєї роботи, заробляли більше та були щасливішими.
            Допоможу поставити цілі, зрозуміти свої сильні сторони та зони росту, знайти цікаві шляхи для розвитку.
          </Typography>
          <ul className="list-disc list-inside">
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Індивідуальна робота
            </li>
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Підготовка
            </li>
          </ul>
        </div>

      </div>
      { /*<div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
        </div> */ }
    </section >
  );
}

export default Services;
